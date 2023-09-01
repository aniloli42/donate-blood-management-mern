import React from 'react'
import styles from './card.module.css'

const Card = ({ name, label, type, required, value, handleChange }) => {
  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.label}>{label}</label>
        <input
          className={styles.input}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
      </div>
    </>
  )
}

export default Card
