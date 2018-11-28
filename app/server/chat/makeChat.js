const { NlpManager} = require('node-nlp')
const fs = require('fs')
const path = 'nlpClassifier.json'

module.exports = app => {

	const http = require('http')
	const server = http.createServer(app);
	const io = require('socket.io')
	const _socket = io(server)
	
	app.get('/chat', (req, res) => {
		res.render('chat')
	})
	
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

	return server
}

const respond = async (lang, filePath, question) => {

	const data = fs.readFileSync(filePath, 'utf8');
	const manager = new NlpManager({ languages: [lang]})

	await manager.import(data)
	await manager.train()
	const response = await manager.process(lang, question)
	console.log(response)
	return (response.answer)
}