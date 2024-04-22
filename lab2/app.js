const http = require('http')
const PORT = 3000

const { handleHome, handleCar, handleAddCar, handlePageNotFound } = require('./routes/index');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        handleHome(res)
    } else if (req.url === '/add-car' && req.method === 'GET') {
        handleAddCar('GET', req, res)
    } else if (req.url === '/add-car' && req.method === 'POST') {
        handleAddCar('POST', req, res)
    } else if (req.url === '/car' && req.method === 'GET') {
        handleCar(res)
    } else {
        handlePageNotFound(res)
    }
})
server.on('listening', () => {
    console.log(`Server is running on ${PORT}.`)
})

server.listen(PORT)