import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '@modules/home'
import TriviaScreen from '@modules/trivia'
import { screenStyle, colors, sizes } from '@utils/styles'
import {
	createRouter,
	NavigationProvider,
	StackNavigation,
} from '@expo/ex-navigation'

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



