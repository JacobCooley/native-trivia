import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	questions: [],
	answeredQuestions: [],
	error: null
}

export const get_questions_error = (state = INITIAL_STATE, action) => {
	const { error } = action
	return {
		...state,
		error
	}
}

export const update_questions = (state = INITIAL_STATE, action) => {
	const { questions } = action
	return {
		...state,
		questions
	}
}

export const get_questions = (state = INITIAL_STATE, action) => {
	const { questions } = action
	return {
		...state,
		error: null,
		answeredQuestions: [],
		questions
	}
}

export const answered_questions = (state = INITIAL_STATE, action) => {
	const { answeredQuestions } = action

	return {
		...state,
		answeredQuestions: answeredQuestions
	}
}


export const HANDLERS = {
	[Types.GET_QUESTIONS]: get_questions,
	[Types.GET_QUESTIONS_ERROR]: get_questions_error,
	[Types.UPDATE_QUESTIONS]: update_questions,
	[Types.ANSWERED_QUESTIONS]: answered_questions
}

export default createReducer(INITIAL_STATE, HANDLERS)