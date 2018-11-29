const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const expressSession = require('express-session')
const app = express()

app.set('views', './app/client/views')
app.set('view engine', 'ejs')

app.use(express.static('./app/client/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(expressSession({
	secret: 'chatbotgo', // segredo para gravar o coockie
	resave: false,
	saveUninitialized: false
}))

consign()
	.include('./app/server/controller')
	.then('./app/server/routes')
	.then('./app/server/models')
	.into(app)

module.exports = app


