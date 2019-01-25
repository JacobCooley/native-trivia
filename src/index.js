import React, { Component } from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
	createStore,
	applyMiddleware
} from 'redux'
import App from './modules/app'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = composeWithDevTools(applyMiddleware(thunk))
// const store = createStore(rootReducer, middleware)

class G2iTriviaApplication extends Component {
	render() {
		return (
				<App />
		)
	}
}

export default registerRootComponent(G2iTriviaApplication)