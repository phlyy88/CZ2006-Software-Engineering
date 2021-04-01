const Vehicle = require('../models/Vehicle')

exports.getVehicleDetails = async (req, res) => {
    Vehicle.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving vehicle info"
            })
        })
}