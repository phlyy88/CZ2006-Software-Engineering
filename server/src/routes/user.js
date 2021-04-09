const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
//const auth = require("../config/auth")

router.post("/register", userController.registerNewUser)
router.post("/login", userController.loginUser)
router.get("/me", userController.getUserDetails)
router.put("/update", userController.updateUserPlan)
router.post("/", userController.getUserDetails)

module.exports = router

// module.exports = app => {
//     const userController = require("../controller/userController")
//     const auth = require("../config/auth")
//     var router = require("express").Router()

//     router.post("/register", userController.registerNewUser)
//     router.post("/login", userController.loginUser)
//     router.get("/me", auth, userController.getUserDetails)

//     app.use('/api/user', router)
// }