export default function passwordValidation(password) {
  if (password.length < 8)
    return { status: false, message: 'Password must be at least 8 characters' }

  return { status: true }
}
