const VehicleController = require('./controllers/VehicleController')

module.exports = (app) =>{
    app.post('/register', (req, res) => {
        res.send({
            message: 'Hello ${req.body.email}, your user was registered.'
        })
    })

    app.post('/vehicleListing', VehicleController.displayVehicleListing)
}