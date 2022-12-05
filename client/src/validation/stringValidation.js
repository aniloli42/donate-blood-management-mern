export default function stringValidation(string, length = 3) {
	if (string.length < length) {
		return false
	}
	return true
}
