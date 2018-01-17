const model = require('./model')

const allRidesController = (req, res, next) => {
  const rides = model.getAllRides()
  res.status(200).json({data: rides})
}

const ridesByIdController = (req, res, next) => {
  const id = parseInt(req.params.id)

  const ride = model.getRideById(id)

  if (!ride) return next({ status: 404, message: `Could not find ride with id of ${id}` })

  res.status(200).json({data: ride})
}

const createRideController = (req, res, next) => {
  const id = parseInt(req.params.id)
  const { name, type, fastpass } = req.body

  if (!name || !type || !fastpass) return next({ status: 400, message: `Name, Type, and Fastpass are required` })

  const ride = model.createRide(name, type, fastpass)

  if (!ride) return next({ status: 404, message: `Could not find ride with id of ${id}` })

  res.status(201).json({data: ride})
}

const updateRideController = (req, res, next) => {
  const id = parseInt(req.params.id)
  const { name, type, fastpass } = req.body

  if (!name || !type || !fastpass) return next({ status: 400, message: `Name, Type, and Fastpass are required` })

  const ride = model.updateRide(id, name, type, fastpass)

  if (!ride) return next({ status: 404, message: `Could not find the ride with id of ${id}` })

  res.status(201).json({data: ride})
}

const deleteRideController = (req, res, next) => {
  const id = parseInt(req.params.id)

  const ride = model.deleteRide(id)
  console.log(ride)

  if (!ride) return next({ status: 404, message: `Could not find ride with id of ${id}` })

  res.status(204).json({data: ride})
}

module.exports = {
  allRidesController,
  ridesByIdController,
  createRideController,
  updateRideController,
  deleteRideController
}
