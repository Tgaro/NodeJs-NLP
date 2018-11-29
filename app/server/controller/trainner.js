const {NlpManager} = require('node-nlp')
const fs = require('fs')

const loadManager = (manager, filePath) => {

	return new Promise ((resolve, reject) => {
		
		manager.load(filePath)
		resolve(manager)
	})
}


const saveManager = (manager, filePath) => {

	return new Promise((resolve, reject) => {

		manager.train()
		manager.save(filePath)
		resolve(manager)
	})
}

const newTrain = (manager, lang, text, intent) => {

	return new Promise((resolve, reject) =>{

		manager.addDocument(lang, text, intent)
		resolve(manager)
	})
}

const newAnswer = (manager, lang, intent, text) => {

	return new Promise((resolve, reject) =>{
		
		manager.addAnswer(lang, intent, text)
		resolve(manager)
	})
}

const addTrain = (lang, text, intent, filePath) => {

	const manager = new NlpManager({ languages: [lang]})
	loadManager(manager, filePath)
		.then(manager => manager = manager)
		.then(manager => newTrain(manager, lang, text, intent))
		.then(manager => saveManager(manager, filePath))
}

const addAnswer = (lang, text, intent, filePath) => {

	const manager = new NlpManager({ languages: [lang]})
	loadManager(manager, filePath)
		.then(manager => manager = manager)
		.then(manager => newAnswer(manager, lang, intent, text))
		.then(manager => saveManager(manager, filePath))
}

module.exports = { addTrain, addAnswer}