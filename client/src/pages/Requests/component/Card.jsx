import React from 'react'
import styles from './card.module.css'

const Card = ({
  name,
  label,
  type,
  required,
  value,
  handleChange,
  input,
  select,
  options
}) => {
  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.label}>{label}</label>
        {input && (
          <input
            className={styles.input}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
          />
        )}

        {select && (
          <select
            className={styles.input}
            name={name}
            defaultValue={value}
            onChange={handleChange}
            required
          >
            {options.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>
        )}
      </div>
    </>
  )
}

export default Card
