import { connect } from 'react-redux'
import TriviaComponent from './TriviaComponent'

const mapStateToProps = state => {
	return {
		trivia: state.trivia
	}
}
const TriviaContainer = connect(
	mapStateToProps
)(TriviaComponent)

export default TriviaContainer