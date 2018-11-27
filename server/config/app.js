const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()

app.set('views', './client/views')
app.set('view engine', 'ejs')

app.use(express.static('./client/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())

consign()
	.include('./server/controller')
	.into(app)

app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'})
})


module.exports = app