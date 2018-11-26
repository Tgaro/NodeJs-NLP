const fs = require('fs')

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

const addTrain = (classifier, text, context) => {

	return new Promise((resolve, reject) =>{
		classifier.addDocument(text, context)
		resolve(classifier)
		reject()
	})
}

const checkFile = filePath => {

	return new Promise((resolve, reject) => {
		
		fs.existsSync(filePath)
		resolve(fs.unlinkSync(filePath))
	})
}

module.exports = {loadClassifier, saveClassifier, newTrain}