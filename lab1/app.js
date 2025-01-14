const http = require('http')
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator')
const { getCars, getCarInformation, getCarAge } = require('./cars')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log(`Server is running on ${PORT}.`)
    const carsList = getCars()
    console.log(carsList)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(getHTMLDocumentStart())
    res.write('<body>')
    res.write('<p>' + getCarInformation(3) + '</p>')
    res.write('<p>' + getCarAge(2) + '</p>')
    res.write('</body>')
    res.write(getHTMLDocumentEnd())
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})