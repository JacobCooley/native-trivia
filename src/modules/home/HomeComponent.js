import React from 'react'
import { View } from 'react-native'
import { screenStyle, colors } from '@utils/styles'
import { operations as triviaOperations } from '@modules/trivia/ducks'
import HeaderComponent from '@common/components/HeaderComponent'
import TextComponent from '@common/components/TextComponent'
import ButtonComponent from '@common/components/ButtonComponent'

const HomeComponent = ({ error, dispatch, navigator }) => {
	const pressBegin = async () => {
		await dispatch(triviaOperations.fetchQuestions(10, 'hard', 'boolean'))
		navigator.push('trivia')
	}
	
	return (
		<View style={screenStyle.flexBetween}>
			<HeaderComponent text='Welcome to the Trivia Challenge!' />
			<TextComponent text='You will be presented with 10 True or False questions.' />
			<TextComponent text='Can you score 100%?' />
			{error ? <TextComponent style={{ color: colors.red }} text='Error Getting Questions, Try Later' /> : <></>}
			<ButtonComponent
				onPress={() => pressBegin()}
				text="Begin" />
		</View>
	)
}

export default HomeComponent
