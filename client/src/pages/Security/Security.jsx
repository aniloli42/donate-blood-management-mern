import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import handleOverFlow from '../../utils/hideOverFlow'

import './security.css'

import { MainComponent } from '..'
import Popup from '../../components/Popup/Popup'
import ChangeEmail from './../../components/ChangeEmail/ChangeEmail'
import DeleteAccount from './../../components/DeleteAccount/DeleteAccount'
import ChangePassword from './Component/ChangePassword'

const Security = () => {
  const profile = useSelector(state => state.Profile)

  const [isEmailChangePopup, setEmailChangePopup] = useState(false)
  const [isDeleteAccountPopup, setDeleteAccountPopup] = useState(false)

  const popupEmail = e => {
    setEmailChangePopup(prevState => !prevState)
    handleOverFlow(!isEmailChangePopup)
  }

  const popupAccount = e => {
    setDeleteAccountPopup(prevState => !prevState)
    handleOverFlow(!isDeleteAccountPopup)
  }

  return (
    <MainComponent>
      {/* Popup Email Change */}
      {isEmailChangePopup && (
        <>
          <Popup title="Change Email" func={popupEmail}>
            <ChangeEmail func={popupEmail} />
          </Popup>
        </>
      )}
      {/* Popup Delete Account */}
      {isDeleteAccountPopup && (
        <>
          <Popup title="Delete Account" func={popupAccount}>
            <DeleteAccount func={popupAccount} />
          </Popup>
        </>
      )}
      <h2>Security</h2>
      <section>
        <h3>Email</h3>
        <hr />
        <div className="email-content">
          <p>Your Email</p>
          <p>{profile?.email}</p>
          <button onClick={popupEmail}>
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </section>

      {/* Change Password */}
      <ChangePassword />

      {/* delete account */}
      <section className="delete-account-section">
        <h3>Danger Zone !</h3>
        <hr />

        <button onClick={popupAccount}>Delete Account</button>
      </section>
    </MainComponent>
  )
}

export default Security
