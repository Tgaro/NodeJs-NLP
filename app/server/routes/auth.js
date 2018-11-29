module.exports = app => {

	app.post('/auth', (req, res) => {
		app.app.server.controller.auth.authenticate(app, req, res)
	})
}