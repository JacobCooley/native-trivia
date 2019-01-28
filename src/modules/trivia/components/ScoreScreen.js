import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { screenStyle, colors, sizes } from '@utils/styles'
import dimen from '@utils/dimen'
import HeaderComponent from '@common/components/HeaderComponent'
import ButtonComponent from '@common/components/ButtonComponent'
import HTMLView from 'react-native-htmlview'
import { MaterialIcons } from '@expo/vector-icons'

export default class ScoreScreen extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			totalQuestions: 0,
			correctQuestions: 0,
			navigator: null
		}
	}
	
	//Set Total and Correct answers
	componentDidMount() {
		let total = 0, correct = 0
		this.props.answeredQuestions.forEach(item => {
			if(item.answer === item.correct_answer){
				correct++
			}
			total++
		})
		this.setState({totalQuestions: total, correctQuestions: correct })
	}
	
	//Reset App
	pressPlayAgain = () => {
		this.props.navigator.replace('home')
	}
	
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ }}>
					<HeaderComponent style={{marginBottom: sizes.largePadding}} text={`You Scored \n ${this.state.correctQuestions}/${this.state.totalQuestions}`} />
					{
						this.props.answeredQuestions.map((question) => {
							const correct = question.answer === question.correct_answer
							const answer = question.answer
							return (
								<View key={question.id} style={{ flex: 1, flexDirection: 'row', marginBottom: sizes.largePadding }}>
									<MaterialIcons
										name={answer === 'True' ? 'check-circle' : 'cancel'} size={50}
										color={correct ? colors.green : colors.red} />
									<HTMLView stylesheet={correct ? greenDiv : redDiv}
														value={`<div>${question.question}</div>`} />
								</View>
							)
						})
					}
					<ButtonComponent
						style={{ marginTop: sizes.medPadding }}
						onPress={this.pressPlayAgain}
						text="Play Again?" />
				</ScrollView>
			</View>
		
		)
	}
}

const greenDiv = StyleSheet.create({
	div: {
		width: dimen.window.width,
		textAlign: 'center',
		fontSize: 22,
		paddingLeft: sizes.smallPadding,
		paddingRight: 110, // Image is pushing html text off screen should find a better solution
		color: colors.green
	}
})

const redDiv = StyleSheet.create({
	div: {
		width: dimen.window.width,
		textAlign: 'center',
		fontSize: 22,
		paddingLeft: sizes.smallPadding,
		paddingRight: 110, // Image is pushing html text off screen should find a better solution
		color: colors.red
	}
})
