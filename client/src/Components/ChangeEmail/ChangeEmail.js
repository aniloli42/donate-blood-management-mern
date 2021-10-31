import React from 'react'
import './changeEmail.css'

const ChangeEmail = () => {
   return (
      <form method='post'>
         <div className='input-group'>
            <label>New Email</label>
            <input type='email' name='newEmail' />
         </div>
         <div className='input-group'>
            <label>Enter Password</label>
            <input type='password' name='verifyPassword' />
         </div>
         <div className='input-buttons'>
            <button type='submit' className='button'>Change Email</button>
         </div>
      </form>
   )
}

export default ChangeEmail
