import { fetchQuestionsFromApi } from '@api/apiQuestions'
import { Creators } from './actions'

const getQuestions = Creators.getQuestions //Inital Get Questions called from HomeComponent
const getQuestionsError = Creators.getQuestionsError //If there is an error in getting questions
const updateQuestions = Creators.updateQuestions //Updating questions once card is removed
const answeredQuestions = Creators.answeredQuestions //Array containing the answers
const setLoading = Creators.setLoading //Set loading symbol

const fetchQuestions = (amount, difficulty, type) => {
	return async dispatch => {
		try {
			setLoading(true)
			const jsonResponse = await fetchQuestionsFromApi(amount, difficulty, type)
			const results = jsonResponse.results
			const resultsWithId = results.map((item, index) =>{
				return{
					...item,
					id: index
				}
			})
			return dispatch(getQuestions(resultsWithId))
		} catch (err) {
			console.log('err', err)
			return dispatch(getQuestionsError(err))
		}
	}
}

export default {
	fetchQuestions,
	updateQuestions,
	answeredQuestions,
	setLoading
}
