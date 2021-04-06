const express = require("express")
const router = express.Router()
const childcareController = require("../controller/childcareController")

router.get("/", childcareController.getChildcareDetails)
//localhost8080/api/childcare = use function getChildcareDetails
module.exports = router;