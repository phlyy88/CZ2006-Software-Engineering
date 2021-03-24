// const express = require('express')
// const VehicleController = require('./controllers/VehicleController')
// const VehicleTaxController = require("./controllers/VehicleTaxController")

// const router = express.Router()

// //Get vehicle data
// router.get("/vehicleListing", async(req, res) => {
//     const vehicle = await VehicleController.loadVehicleCollection()
//     res.send(vehicle.find({}).toArray())
// })

// //Filter Data
// router.get("/filterVehicle", async(req, res) => {
//     const filterResult = await VehicleController.filterVehicle()
//     res.send(filterResult)
// })

// //Get Tax Data
// router.get("/", async(req, res) => {
//     const vehicleTax = VehicleTaxController.loadVehicleTaxCollection()
//     res.send(vehicleTax.find({}).toArray())
// } )

// module.exports = router