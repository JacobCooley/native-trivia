import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '@utils/styles'

const TextComponent = ({ style, text, fontColor = colors.white, fontWeight = 'normal', size = 26, align = 'center' }) => {
	const textStyle = {
		color: fontColor,
		fontWeight: fontWeight,
		fontSize: size,
		textAlign: align,
		...style
	}
	return (
		<Text style={textStyle}>{text}</Text>
	)
}

export default TextComponent