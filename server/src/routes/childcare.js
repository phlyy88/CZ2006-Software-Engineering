const express = require("express")
const router = express.Router()
const childcareController = require("../controller/childcareController")

router.get("/", childcareController.getChildcareDetails)

module.exports = router
