const renderPage = require('../views/home').renderPage
const addCarPage = require('../views/add-car').renderPage
const carPage = require('../views/car').renderPage

const handleHome = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(renderPage())
    res.end()
}

const handleAddCar = (req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(addCarPage())
        res.end()
    } else if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const formData = JSON.parse(body)
            res.writeHead(302, { 'Location': '/car' })
            res.end()
        })
    }
}

const handleCar = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(carPage())
    res.end()
}

const handlePageNotFound = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('404 Page Not Found')
    res.end()
}

module.exports = {
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound
}
