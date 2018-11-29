const app = require('./config/server')
const port = 3000
const server = app.listen(port, () => console.log(`Server listening on port ${port}`))
const io = require('socket.io').listen(server)

app.set('io', io)



