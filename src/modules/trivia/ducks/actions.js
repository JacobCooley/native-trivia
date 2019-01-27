import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
	getQuestions: ['questions'],
	getQuestionsError: ['error'],
	updateQuestions: ['questions'],
	answeredQuestions: ['answeredQuestions']
});

export { Creators, Types };