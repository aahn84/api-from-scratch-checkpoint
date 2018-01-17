const model = require('./model')

const allRidesController = (req, res, next) => {
  debugger
  const rides = model.getAllRides()
  res.status(200).json({data: rides})
}

// const ridesByIdController =
//
// const updateRideController =
//
// const createRideController =
//
// const updateRideController =
//
// const deleteRideController =

module.exports = {
  allRidesController,
  // ridesByIdController,
  // createRideController,
  // updateRideController,
  // deleteRideController
}
//
