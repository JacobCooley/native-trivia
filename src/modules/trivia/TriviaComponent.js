import React, { forwardRef, useRef, useImperativeMethods } from 'react'
import { Image, Text, View } from 'react-native'
import { screenStyle } from '@utils/styles'
import Question from './components/Question'
import ScoreScreen from './components/ScoreScreen'
import { MaterialIcons } from '@expo/vector-icons'
import { colors, sizes } from '@utils/styles'
import { operations } from './ducks'
import dimen from '@utils/dimen'
import TextComponent from '../../common/components/TextComponent'

export default class TriviaComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			arrayEmpty: false,
			totalLength: 0
		}
	}
	
	componentDidMount() {
		const questionsArrayLength = this.props.trivia.questions.length
		this.setState({ totalLength: questionsArrayLength })
		
		if (questionsArrayLength === 0) {
			this.setState({ arrayEmpty: true })
		}
	}
	
	//Removes card from the array
	removeCard = async id => {
		const newQuestions = this.props.trivia.questions
		newQuestions.splice(
			this.props.trivia.questions.findIndex(x => x.id === id),
			1
		)
		await this.props.dispatch(operations.updateQuestions(newQuestions))
		if (this.props.trivia.questions.length === 0) {
			this.setState({ arrayEmpty: true })
		}
	}
	
	swipeFalse() {
		this.refs.child.swipeFalse()
	}
	
	swipeTrue() {
		this.refs.child.swipeTrue()
	}
	
	// Footer containing buttons that say true and false
	footerForSwipeView(questionsArray, currentCardId) {
		return (
			<View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
					<TextComponent style={{fontWeight: 'bold'}} text={`${questionsArray.length}/${this.state.totalLength}`} />
				</View>
				<View style={{
					width: dimen.window.width,
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingLeft: sizes.xLargePadding,
					paddingRight: sizes.xLargePadding
				}}>
					<MaterialIcons
						onPress={this.refs[currentCardId] ? () => this.refs[currentCardId].swipeFalse() : console.log('empty ref')}
						name="cancel" size={70} color={colors.red} />
					<MaterialIcons
						onPress={this.refs[currentCardId] ? () => this.refs[currentCardId].swipeTrue() : console.log('empty ref')}
						name="check-circle" size={70} color={colors.green} />
				</View>
			</View>
		)
	}
	
	render() {
		const questionsArray = this.props.trivia.questions
		const answeredQuestions = this.props.trivia.answeredQuestions
		const currentCardId = this.props.trivia.questions.length > 0 ? this.props.trivia.questions[this.props.trivia.questions.length - 1].id : 0
		return (
			<View style={screenStyle.flex}>
				{questionsArray.map((item, key) => (
					<Question
						key={key}
						item={item}
						answeredQuestions={answeredQuestions}
						ref={item.id}
						dispatch={this.props.dispatch}
						removeCard={() => this.removeCard(item.id)}
					/>
				))}
				{this.state.arrayEmpty ? (
						<ScoreScreen answeredQuestions={answeredQuestions} navigator={this.props.navigator} />
					) :
					this.footerForSwipeView(questionsArray, currentCardId)
				}
			</View>
		)
	}
}
