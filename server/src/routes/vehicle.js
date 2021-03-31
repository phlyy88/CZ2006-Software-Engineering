const express = require("express")
const router = express.Router()
const vehicleController = require("../controller/vehicleController")

router.get("/", vehicleController.getVehicleDetails)

module.exports = router
