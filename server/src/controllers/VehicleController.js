const {Vehicle} = require('./models/Vehicle')

module.exports = {
    displayVehicleListing(req, res) {
        res.send({
            message: "Vehicle listing!"
        })
    }
}