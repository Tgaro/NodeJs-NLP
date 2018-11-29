const { NlpManager} = require('node-nlp')
const fs = require('fs')
const path = 'C:\\Users\\tiago.aro\\Documents\\Projetos\\Node.js\\classifier\\nlpClassifier.json'

const makeChat = app => {

	const _socket = app.get('io')

	_socket.on('connection', socket => {
		
		console.log('User connected')
		
		socket.on('disconnect', () => {
			
			console.log('User disconnected')
		})

		socket.on('chat message', async msg => {

			console.log('Message received', msg)
			console.log('Getting response')
			const answer = await respond('en', path, msg)
			console.log('Reponse', answer)
			_socket.emit('chat response', answer)
		})
	})
}

const respond = async (lang, filePath, question) => {

	const data = fs.readFileSync(filePath, 'utf8');
	const manager = new NlpManager({ languages: [lang]})

	await manager.import(data)
	await manager.train()
	const response = await manager.process(lang, question)
	return (response.answer)
}


module.exports = {makeChat}