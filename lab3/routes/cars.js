const express = require('express')
const cheerio = require('cheerio')
const router = express.Router()

let cars = []
let nextId = 1

router.get('/car', (req, res) => {
    const html = cheerio.load('<div class="car"></div>')
    if (cars.length === 0) {
        html('.car').text('No cars has been found.')
    } else {
        const car = cars[cars.length - 1]
        html('.car').append(`<h2>Last added car</h2><div><span class="bold">make:</span> ${car.make}</div><div><span class="bold">model:</span> ${car.model}</div><div><span class="bold">year:</span> ${car.year}</div><div><span class="bold">color:</span> ${car.color}</div>`)
    }
    res.send(html.html())
})

router.get('/car/add', (req, res) => {
    res.sendFile('add-car.html', { root: 'views' })
})

router.get('/car/list', (req, res) => {
    const html = cheerio.load('<div class="cars"></div>')
    if (cars.length === 0) {
        html('.cars').text('No cars has been found.')
    } else {
        html('.cars').append('<h2>Cars</h2><ul>')
        cars.forEach(car => {
            html('.cars ul').append(`<li><p><span class="bold">make:</span> ${car.make}</p><p><span class="bold">model:</span> ${car.model}</p><p><span class="bold">year:</span> ${car.year}</p><p><span class="bold">color:</span> ${car.color}</p></li>`)
        })
        html('.cars').append('</ul>')
    }
    res.send(html.html())
})

router.post('/car/add', (req, res) => {
    const { make, model, year, color } = req.body
    const newCar = { id: nextId++, make, model, year, color }
    cars.push(newCar)
    res.redirect('/car')
})

module.exports = router
