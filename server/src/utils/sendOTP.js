const sendMail = require("./mailer.js");

const brand = "🩸Donate Blood Project <donateblood.project@gmail.com>";

async function sendForgetPasswordOTP({ user, email, otp }) {
  try {
    const subject = "Password Reset OPT | Donate Blood";
    const text = `
      Donate Blood
      -----------------------------------
    
      Hi ${user},
      
      Use the following OTP to complete your forget password. OTP is valid for 5 minutes.
    
      OTP Code: ${otp}
  
      Ignore the mail, if you not try to forget password in ${process.env.DOMAIN}.
      
      Regards,
      Donate Blood Project Team`;

    const html = `<table style="font-family:Helvetica,Arial,sans-serif;min-width:375px;width:575px;max-width:720px" border="0"><tr><td style="text-align:center"><h2 style="color:#00466a;font-size:1.8em;margin-bottom:5px">Donate Blood Project</h2></td></tr><tr><td><hr></td></tr><tr><td style="font-size:1.2em;padding:.8em 0">Hi ${user},</td></tr><tr><td style="font-size:1.1em;padding:.8em 0">Use the following OTP to complete your forget password. OTP is valid for 5 minutes.</td></tr><tr><td><p style="margin:0 auto;width:max-content;padding:.6em 1em;border-radius:.3em;background-color:#00466a;color:#fff;font-size:1.6em">${otp}</p></td></tr><tr><td style="font-size:.98em;padding:.8em 0">Ignore the mail, if you do not try to forget password in <a href="${process.env.DOMAIN}" style="color:#00466a;text-decoration:none;font-weight:700">Donate Blood</a>.</td></tr><tr><td style="padding-top:2em">Regards,</td></tr><tr><td style="font-size:1.2em;font-weight:700;color:#00466a">Donate Blood Project Team</td></tr></table>`;

    await sendMail({ from: brand, to: email, subject, text, html });

    return { message: "OK" };
  } catch (err) {
    return err.message;
  }
}

module.exports = sendForgetPasswordOTP;
