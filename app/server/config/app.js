const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()

app.set('views', '../../client/views')
app.set('view engine', 'ejs')

app.use(express.static('../../client/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyPaser.json())

routes(app)

module.exports = app