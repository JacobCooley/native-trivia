import { Platform, StyleSheet } from 'react-native'
import dimen from '@utils/dimen'

export const colors = {
	darkBlue: '#202E45',
	green: '#608D93',
	red: '#CC0000',
	lightBlue: '#4b789a',
	white: '#FEFFFF',
	black: '#252525',
	grey: '#F1F2F6',
	greyText: '#979797',
	yellow: '#FFCC00',
	charcoal: '#333333'
}

export const sizes = {
	tinyPadding: 5,
	smallPadding: 10,
	medPadding: 20,
	largePadding: 30,
	xLargePadding: 40,
	xxLargePadding: 60,
}

export const screenStyle = StyleSheet.create({
	flex: {
		flex: 1,
		padding: sizes.largePadding,
		paddingTop: sizes.xLargePadding,
		backgroundColor: colors.darkBlue,
		width: dimen.window.width,
		height: dimen.window.height
	},
	flexCenter: {
		flex: 1,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: sizes.largePadding,
		paddingTop: sizes.xLargePadding,
		backgroundColor: colors.darkBlue,
		width: dimen.window.width,
		height: dimen.window.height
	},
	flexBetween: {
		flex: 1,
		textAlign: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		padding: sizes.largePadding,
		paddingTop: sizes.xLargePadding,
		backgroundColor: colors.darkBlue,
		width: dimen.window.width,
		height: dimen.window.height
	},
	div: {
		textAlign: 'center',
		fontSize: 26,
		color: colors.charcoal,
		paddingLeft: sizes.tinyPadding,
		paddingRight: sizes.tinyPadding
	}
})