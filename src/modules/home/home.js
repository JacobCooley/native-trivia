import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextView from '@common/components/TextView'
import ButtonView from '@common/components/ButtonView'
import { screenStyle } from '@common/styles'

export default class Home extends React.Component {
	pressBegin() {
		this.props.navigator.push('trivia')
	}
	
	render() {
		return (
			<>
				<View style={screenStyle.flexBetween}>
					<TextView fontWeight='bold' size={30} text='Welcome to the Trivia Challenge!' />
					<TextView text='You will be presented with 10 True or False questions.' />
					<TextView text='Can you score 100%?' />
					<ButtonView
						onPress={() => this.pressBegin()}
						text="Button" />
				</View>
			</>
		)
	}
}

