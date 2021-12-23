const User = require("./../models/user.js")
const OTP = require("./../models/otp.js")
const sendMail = require("./../Helper/sendOTP.js")

const sendOTP = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ message: "User not Found!" })

    const otp = OTPGENERATOR()

    const newOTP = new OTP({
      email,
      otp,
      expiredAt: new Date().getTime() + 300000,
    })

    await newOTP.save()

    const mailResponse = await sendMail({ user: user.name, email, otp })

    console.log(mailResponse)

    res.status(200).json({ message: "Check Your Email" })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body

    const getOTP = await OTP.findOne({ email, otp })

    if (!getOTP) return res.status(400).json({ message: "Invaild OTP" })

    const currentTime = new Date().getTime()
    const isOTPExpired = getOTP.expiredAt - currentTime

    if (isOTPExpired < 0) {
      await OTP.deleteOne({ email, otp })

      return res.status(400).json({ message: "OTP Expired" })
    }

    if (getOTP.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" })

    await OTP.deleteOne({ email, otp })

    return res.status(200).json({ message: "OTP verified" })
  } catch (err) {
    return res.status(500).json({ message: err.message, status: true })
  }
}

function OTPGENERATOR() {
  return Math.ceil(Math.random() * (99999 - 10000) + 10000)
}

module.exports = { sendOTP, verifyOTP }
