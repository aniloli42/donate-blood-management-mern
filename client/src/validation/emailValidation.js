const emailValidation = email => {
  const emailRegex =
    /^[a-zA-Z]{1,}[0-9]{0,}\.{0,1}[a-zA-Z]{2,}[0-9]{0,}@[a-zA-Z]{2,}\.{1}[a-zA-Z]{2,}$/

  return emailRegex.test(email)
}

export default emailValidation
