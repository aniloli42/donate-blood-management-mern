export default function nameValidation(string) {
	const nameRegex = /^[a-zA-Z]{1}[a-zA-Z]{2,}\s?[a-zA-Z]{0,}\s?[a-zA-Z]{0,}$/

	return nameRegex.test(string)
}
