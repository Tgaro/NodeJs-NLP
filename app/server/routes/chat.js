module.exports = app => {

	app.get('/chat', (req, res) => {
		app.app.server.controller.chat.makeChat(app)
		res.render('chat')
	})
}