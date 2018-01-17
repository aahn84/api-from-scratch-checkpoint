const rides = [
  {
    id: 1,
    name: 'Space Mountain',
    type: 'rollercoaster',
    fastpass: 'yes'
  },
  {
    id: 2,
    name: 'Guardians of the Galaxy – Mission: BREAKOUT!',
    type: 'extreme drop',
    fastpass: 'yes'
  },
  {
    id: 3,
    name: 'Indiana Jones',
    type: 'rollercoaster',
    fastpass: 'no'
  },
]

function getAllRides() {
  return rides;
}

function getRideById(id) {
  const ride = rides.find(ride => ride.id === id)

  return ride;
}

function createRide(name, type, fastpass) {
  const nextID = rides.length + 1
  const newRide = { id: nextID, name, type, fastpass }
  rides.push(newRide)

  return newRide;
}

function updateRide(id, name, type, fastpass) {
  const ride = getRideById(id)

  ride.name = name
  ride.type = type
  ride.fastpass = fastpass

  return ride;
}

function deleteRide(id) {
  const ride = getRideById(id)

  const index = rides.indexOf(ride)
  rides.splice(index, 1)

  return ride;
}

module.exports = {
  getAllRides,
  getRideById,
  createRide,
  updateRide,
  deleteRide
}
