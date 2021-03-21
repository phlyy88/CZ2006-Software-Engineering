const User = require("../models/User")

exports.registerNewUser = async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        gender,
        dob,
        income
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
            return res.status(400).json({
                message: "User already exists"
            })
        }
        user = new User({
            email,
            password,
            firstName,
            lastName,
            gender,
            dob,
            income
        })
        console.log("hello")
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
    await res.json(req.userData)
}