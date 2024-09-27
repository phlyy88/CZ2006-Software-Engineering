const express = require("express")
const router = express.Router()
const vehicleController = require("../controller/vehicleController")

router.get("/", vehicleController.getVehicleDetails)
router.post("/costBreakdown", vehicleController.calculateCostVehicle)

module.exports = router
