import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '@utils/styles'

const HeaderComponent = ({ style, text, fontColor = colors.white, fontWeight = 'bold', size = 30, align = 'center' }) => {
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

export default HeaderComponent