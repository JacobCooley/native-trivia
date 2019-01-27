import { server } from '@utils/constants'

export const fetchQuestionsFromApi = async (amount = 10, difficulty = 'hard', type = 'boolean') => {
	const fetchResponse = await fetch(`${server}?amount=${amount}&difficulty=${difficulty}&type=${type}`, {
		method: "GET",
		credentials: "include"
	})
	if (fetchResponse.status === 200) {
		const jsonResponse = await fetchResponse.json()
		return jsonResponse
	} else{
		throw 'Failed to fetch questions'
	}
}