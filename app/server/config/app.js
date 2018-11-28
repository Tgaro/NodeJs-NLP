const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const chat = require('../chat/makeChat')
const app = express()

app.set('views', './app/client/views')
app.set('view engine', 'ejs')

app.use(express.static('./app/client/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())

consign()
	.include('./app/server/controller')
	.into(app)

const server = chat(app)

module.exports = server