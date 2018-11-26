const natural = require('natural')
const controller = require('../controller/nlpController')

const filePath = 'classifier.json'
let _classifier = new natural.BayesClassifier()

const addTrain = (text, context) => {
	controller.loadClassifier(natural.BayesClassifier, filePath)
		.then(result => _classifier = result)
		.then(classifier => controller.addTrain(_classifier, text, context))
		.then(classifier => controller.saveClassifier(_classifier, filePath))
		.catch()
}

const classify = () => {
	
}

