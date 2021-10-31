import React from "react"

const DeleteAccount = () => {
	return (
		<form method="post">
			<div className="input-group">
				<label>Enter Password</label>
				<input type="password" name="verifyPassword" />
			</div>
			<div className="input-buttons">
				<button type="submit" className="button">
					Delete Account
				</button>
			</div>
		</form>
	)
}

export default DeleteAccount
