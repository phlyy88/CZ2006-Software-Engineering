const express = require("express")
const router = express.Router()
const grantsController = require("../controller/grantsController")

router.get("/", grantsController.getGrantDetails)

module.exports = router
