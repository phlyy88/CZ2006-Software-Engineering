const express = require("express")
const router = express.Router()
const housingController = require("../controller/housingController")

router.get("/", housingController.getHousingDetails)
router.post("/costBreakdown", housingController.calculateCost)

module.exports = router
