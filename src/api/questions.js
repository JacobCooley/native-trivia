import { server } from '@utils/constants'

export const getQuestions = async (amount, difficulty, type) => {
	const fetchResponse = await fetch(`${server}?amount=${amount}&difficulty=${difficulty}&type=${type}`, {
		method: "GET",
		credentials: "include"
	})
	if (fetchResponse.status === 200) {
		const jsonResponse = await fetchResponse.json()
		return jsonResponse
	}
}