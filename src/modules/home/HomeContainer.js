import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'

const mapStateToProps = state => {
	return {
		error: state.trivia.error
	}
}
const HomeContainer = connect(mapStateToProps)(HomeComponent)

export default HomeContainer