import React from 'react'
import { Text } from 'react-native'

const TextView = ({ style, text, fontWeight = 'normal', size = 26, align = 'center' }) => {
	const textStyle = {
		color: 'white',
		fontWeight: fontWeight,
		fontSize: size,
		textAlign: align,
		...style
	}
	return (
		<Text style={textStyle}>{text}</Text>
	)
}

export default TextView