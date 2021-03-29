const express = require("express")
const router = express.Router()
const HDBcareController = require("../controller/HDBController")

router.get("/", HDBcareController.getHDBDetails)

module.exports = router
