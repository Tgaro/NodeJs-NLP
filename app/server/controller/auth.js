module.exports.authenticate = (app, req, res) => {

	const userDAO = new app.app.server.models.userDAO(req.body.user)
	let authorized = false
	req.assert('user', 'You must enter a username').notEmpty()
	req.assert('pwd', 'You must enter a password').notEmpty()

	console.log(req.body)

	req.validationErrors()
	? res.status(400).send(`Please check your url. It seems that you haven't logged yet.`)
	: req.authorized = userDAO.authenticate(req.body.user)

	req.authorized
	? res.render('home', {

		user: req.body.user
	})
	: res.send('UNAUTHORIZED')
}