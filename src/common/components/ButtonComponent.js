import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@utils/styles'

const ButtonComponent = ({ style, text, onPress, textColor = colors.white,
													 backgroundColor = colors.green, fontWeight = 'normal', size = 22, align = 'center' }) => {
	const buttonStyle = {
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor,
		fontWeight,
		height: 50,
		width: 200,
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: 'center',
		...style
	}
	
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={buttonStyle}>
				<Text style={{ textAlign: align, fontSize: size, color: textColor }}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ButtonComponent