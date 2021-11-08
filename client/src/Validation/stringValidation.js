export default function stringValidation(string, length = 4) {
	if (string.length < length) {
		return false
	}
	return true
}
