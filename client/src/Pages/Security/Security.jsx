import React from "react"
import "./security.css"
const Security = () => {
  return (
    <>
      <h2>Security</h2>

      <section>
        <h3>Email</h3>
        <hr />
        <div className="email-content">
          <p>Your Email</p>
          <p>aniloli42@gmail.com</p>
          <button>
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </section>

      <section>
        <h3>Change Password</h3>
        <hr />
        <form>
          <div className="input-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input type="password" id="oldPassword" name="oldPassword" />
          </div>

          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" name="newPassword" />
          </div>

          <div className="input-group">
            <label htmlFor="retypePassword">Retype Password</label>
            <input type="password" id="retypePassword" name="retypePassword" />
          </div>
          <div className="input-buttons">
            <button type="submit">Change Password</button>
            <button>Forget Password?</button>
          </div>
        </form>
      </section>

      {/* delete account */}
      <section className="delete-account-section">
        <h3>Danger Zone !</h3>
        <hr />

        <button>Delete Account</button>
      </section>
    </>
  )
}

export default Security
