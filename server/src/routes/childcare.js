const express = require("express")
const router = express.Router()
const childcareController = require("../controller/childcareController")

router.get("/", childcareController.getChildcareDetails)
router.post("/costBreakdown", childcareController.calculateCostchild)
router.post("/grantsBreakdown", childcareController.calculateGrantschild)
module.exports = router;