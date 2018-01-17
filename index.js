const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')
// const uuidv4 = require('uuid/v4')
const controller = require('./controller')
const morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(morgan('dev'))
app.use(bodyParser.json())

debugger
app.get('/rides', (req, res, next) => {
  debugger
  console.log(`MADE IT`)
})
// app.get('/rides', controller.allRidesController)
// app.get('/rides/:id', controller.ridesByIdController)
// app.post('/rides', controller.createRideController)
// app.put('/rides/:id', controller.updateRideController)
// app.delete('/rides/:id', controller.deleteRideController)


app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Not found'}})
})

app.listen(() => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app
