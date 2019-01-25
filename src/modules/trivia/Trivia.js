import React from 'react'
import { View } from 'react-native'
import TextView from '../../common/components/TextView'
import { screenStyle } from '@common/styles'

export default class Trivia extends React.Component {
	render() {
		return (
			<View style={screenStyle.flexCenter}>
				<TextView text='Trivia!!!!' size={40} />
			</View>
		)
	}
}

