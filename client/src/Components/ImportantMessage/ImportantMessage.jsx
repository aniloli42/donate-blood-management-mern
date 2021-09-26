import React from 'react'
import "./importantmessage.css"

const ImportantMessage = (props) => {
  const { message, action, isAction = false } = props
  return (
    <div className="important-message">
      <p className="important-text">
        {message}
      </p>
      {isAction && <button className="important-action">{action}</button>}
    </div>
  )
}

export default ImportantMessage
