module.exports = app => {

	app.post('/home', (req, res) => {

		req.assert('user', 'You must enter a username').notEmpty()
		req.assert('pwd', 'You must enter a password').notEmpty()
		
		console.log(req.params)
		console.log(req.body)

		req.validationErrors()
		? res.status(400).send(`Please check your url. It seems that you haven't logged yet.`)
		: res.render('home', {

			user: req.body.user
		})

	})
}