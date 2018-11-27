const natural = require('natural')
const fs = require('fs')

const addTrain = (text, context, filePath) => {
	let _classifier = new natural.BayesClassifier()

	loadClassifier(natural.BayesClassifier, filePath)
		.then(result => _classifier = result)
		.then(classifier => controller.newTrain(_classifier, text, context))
		.then(classifier => controller.saveClassifier(_classifier, filePath))
		.catch(console.log('Error'))
}

const loadClassifier = (classifier, filePath) => {

	return new Promise ((resolve, reject) => {
		classifier.load(filePath, null, (err, classifier) => {
			err
			? reject(console.log(err))
			: resolve(classifier)
		})
	})
}


const saveClassifier = (classifier, filePath) => {

	return new Promise((resolve, reject) => {

		checkFile(filePath)
		classifier.retrain()
		classifier.save(filePath, (err, classifier) => {
			err
			? reject(console.log(err))
			: resolve(classifier)
		})
	})
}

const newTrain = (classifier, text, context) => {

	return new Promise((resolve, reject) =>{
		classifier.addDocument(text, context)
		resolve(classifier)
		reject(classifier)
	})
}

const checkFile = filePath => {

	return new Promise((resolve, reject) => {
		
		fs.existsSync(filePath)
		resolve(fs.unlinkSync(filePath))
	})
}


module.exports = { addTrain}