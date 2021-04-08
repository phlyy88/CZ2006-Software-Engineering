const express = require("express")
const router = express.Router()
const childcareController = require("../controller/childcareController")

router.get("/", childcareController.getChildcareDetails)
router.post("/childcostBreakdown", childcareController.calculateCostchild)
// router.post("/childgrantsBreakdown", childcareController.calculateGrantschild)
module.exports = router;