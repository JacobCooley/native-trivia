import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '@modules/home'
import TriviaScreen from '@modules/trivia'
import { colors, sizes } from '@common/styles'
import {
	createRouter,
	NavigationProvider,
	StackNavigation,
} from '@expo/ex-navigation'
import { screenStyle } from '@common/styles'
// import styles from './App.scss'

const Router = createRouter(() => ({
	home: () => HomeScreen,
	trivia: () => TriviaScreen,
}))

export default class App extends React.Component {
	render() {
		return (
			<View style={screenStyle.flexCenter}>
				<NavigationProvider router={Router}>
					<StackNavigation initialRoute={Router.getRoute('home')} />
				</NavigationProvider>
			</View>
		)
	}
}



