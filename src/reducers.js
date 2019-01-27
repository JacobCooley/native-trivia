import { combineReducers } from 'redux';
import triviaReducer from '@modules/trivia/ducks'
const rootReducer = combineReducers({
	 	trivia: triviaReducer,
});

export default rootReducer;