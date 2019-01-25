import React from 'react'
import { Button } from 'react-native'
import { colors } from '@common/styles'

const ButtonView = ({ style, text, onPress, backgroundColor = colors.green, fontWeight = 'normal', size = 22, align = 'center' }) => {
	const buttonStyle = {
		color: 'white',
		backgroundColor,
		fontWeight,
		fontSize: size,
		height: 100,
		textAlign: align,
		...style
	}
	return (
		<Button onPress={onPress} style={buttonStyle} title={text} />
	)
}

export default ButtonView