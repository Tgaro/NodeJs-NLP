const routes = app => {

	app.use((req, res) => {
		res.status(404).send({url: req.originalUrl + ' not found'})
	})

	app.get('/', (req, res) => {
		res.send('Working')
	})
}

module.exports = routes