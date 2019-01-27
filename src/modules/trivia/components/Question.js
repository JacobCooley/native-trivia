import { StyleSheet, Text, Animated, PanResponder, View, } from 'react-native'
import React, { Component } from 'react'
import dimen from '@utils/dimen'
import { colors, sizes } from '@common/styles'
import { operations } from '../ducks'
import HeaderComponent from '@common/components/HeaderComponent'
import { MaterialIcons } from '@expo/vector-icons'
import HTMLView from 'react-native-htmlview'
import { screenStyle } from '@common/styles'

export default class Question extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Xposition: new Animated.Value(0),
			swipeTrue: false,
			swipeFalse: false
		}
		this.Card_Opacity = new Animated.Value(1)
	}
	
	componentWillMount() {
		const SCREEN_WIDTH = dimen.window.width
		
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => false,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.state.Xposition.setValue(gestureState.dx)
				if (gestureState.dx > SCREEN_WIDTH - 300) {
					this.setState({
						swipeTrue: true,
						swipeFalse: false,
					})
				} else if (gestureState.dx < -SCREEN_WIDTH + 300) {
					this.setState({
						swipeFalse: true,
						swipeTrue: false,
					})
				}
			},
			
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx < SCREEN_WIDTH - 200 && gestureState.dx > -SCREEN_WIDTH + 200) {
					this.setState({
						swipeFalse: false,
						swipeTrue: false,
					})
					Animated.spring(
						this.state.Xposition,
						{
							toValue: 0,
							speed: 5,
							bounciness: 10,
						},
						{ useNativeDriver: true }
					).start()
				} else if (gestureState.dx > SCREEN_WIDTH - 200) {
					this.swipeTrue(SCREEN_WIDTH)
				} else if (gestureState.dx < -SCREEN_WIDTH + 200) {
					this.swipeFalse(SCREEN_WIDTH)
				}
			}
		})
	}
	
	processAnswer(answer) {
		const answeredItem = this.props.item
		answeredItem['answer'] = answer
		const answeredQuestions = [...this.props.answeredQuestions]
		answeredQuestions.push(answeredItem)
		this.props.dispatch(operations.answeredQuestions(answeredQuestions))
	}
	
	swipeFalse() {
		this.processAnswer('False')
		this.setState({ swipeFalse: true }, () => {
			const SCREEN_WIDTH = dimen.window.width
			Animated.parallel(
				[
					Animated.timing(this.state.Xposition, {
						toValue: -SCREEN_WIDTH,
						duration: 200,
					}),
					
					Animated.timing(this.Card_Opacity, {
						toValue: 0,
						duration: 200,
					}),
				],
				{ useNativeDriver: true }
			).start(() => {
				this.setState({ swipeFalse: false, swipeTrue: false }, () => {
					this.props.removeCard()
				})
			})
		})
	}
	
	swipeTrue() {
		this.processAnswer('True')
		this.setState({ swipeTrue: true }, () => {
			const SCREEN_WIDTH = dimen.window.width
			Animated.parallel(
				[
					Animated.timing(this.state.Xposition, {
						toValue: SCREEN_WIDTH,
						duration: 200,
					}),
					
					Animated.timing(this.Card_Opacity, {
						toValue: 0,
						duration: 200,
					}),
				],
				{ useNativeDriver: true }
			).start(() => {
				this.setState({ swipeFalse: false, swipeTrue: false }, () => {
					this.props.removeCard()
				})
			})
		})
	}
	
	render() {
		const rotateCard = this.state.Xposition.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: ['-20deg', '0deg', '20deg'],
		})
		const item = this.props.item
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[
					styles.cardStyle,
					{
						opacity: this.Card_Opacity,
						transform: [
							{ translateX: this.state.Xposition },
							{ rotate: rotateCard },
						],
					},
				]}>
				<HeaderComponent fontColor={colors.darkBlue} text={item.category} />
				<HTMLView stylesheet={screenStyle} value={`<div>${item.question}</div>`} />
				{this.state.swipeFalse ? (
					<View style={styles.falseStyle}>
						<MaterialIcons name="cancel" size={70} color={colors.red} />
					</View>) : <></>}
				{this.state.swipeTrue ? (
					<View style={styles.truthStyle}>
						<MaterialIcons name="check-circle" size={70} color={colors.green} />
					</View>) : <></>}
			
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	cardStyle: {
		width: '95%',
		height: '70%',
		marginTop: sizes.xxLargePadding,
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
		borderRadius: 7,
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.grey
	},
	falseStyle: {
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: .2,
		position: 'absolute',
		textAlign: 'right',
		color: '#000',
		fontSize: 100,
		fontWeight: 'bold',
		backgroundColor: colors.red,
	},
	truthStyle: {
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: .2,
		position: 'absolute',
		color: '#000',
		fontSize: 100,
		fontWeight: 'bold',
		backgroundColor: colors.green,
	}
})