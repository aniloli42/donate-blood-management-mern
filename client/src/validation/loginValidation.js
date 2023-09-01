const loginValidation = () => {
  const getProfile = localStorage.getItem('profile')

  if (getProfile == null) return
  if (typeof getProfile !== Object) return localStorage.removeItem('profile')

  const profile = JSON.parse(getProfile)

  return profile
}

export default loginValidation
