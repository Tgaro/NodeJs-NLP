const app = require('./server/config/app')
const port = 3030

app.listen(port, () => {})

console.log(`Server listening on port ${port}`)