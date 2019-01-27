export const addOrUpdate = (item, array) => {
	const answeredQuestions = [...array]
	const alreadyExists = answeredQuestions.findIndex(el => el.id === item.id)
	if (alreadyExists !== -1) {
		answeredQuestions[alreadyExists] = item
	} else {
		answeredQuestions.push(item)
	}
	return answeredQuestions
}