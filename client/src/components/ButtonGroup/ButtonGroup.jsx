import React from 'react'
import './buttongroup.css'

const ButtonGroup = ({ editFunc, deleteFunc }) => {
  return (
    <>
      <button className="button action-button action-edit" onClick={editFunc}>
        <i className="fas fa-pen"></i>
      </button>

      <button
        className="button action-button action-delete"
        onClick={deleteFunc}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </>
  )
}

export default ButtonGroup
