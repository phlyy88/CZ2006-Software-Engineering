// const db = require('../models')
const User = require('../models/User')

exports.registerNewUser = async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        gender,
        dob,
        income,
        v1,
        v2,
        v3,
        //h1,h2,h3,c1,c2,c3
    } = req.body
    try {
        // console.log(isUser)
        // if (isUser.length >= 1) {
        //     return res.status(409).json({
        //         message: "email already in use"
        //     })
        // }
        let user = await User.findOne({
            email
        })
        if (user) {
            return res.status(409).json({
                message: "User is already registered."
            })
        }
        user = new User({
            email,
            password,
            firstName,
            lastName,
            gender,
            dob,
            income,
            v1,
            v2,
            v3,
            //h1,h2,h3,c1,c2,c3
        })
        let data = await user.save()
        const token = await user.generateAuthToken() // here it is calling the method that we created in the model
        res.status(201).json({ data, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" })
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.getUserDetails = async (req, res) => {
    try {
        const email = req.body.email
        console.log(email)
        const user = await User.findByEmail(email)
        console.log("At controller")
        console.log(user)
        res.status(201).json({user})
        //res.send(user)
        //return user
    } catch (err) {
        console.log("Controller error")
        res.status(400).json({err : err})
    }
}

// exports.getUserDetails = async (req, res) => {
//     User.find()
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occured while retrieving user info"
//             })
//         })
// }

exports.updateUserPlan = async (req) => {
    console.log("in controller")
    User.updatePlan(req)
    console.log("back to controller")
}