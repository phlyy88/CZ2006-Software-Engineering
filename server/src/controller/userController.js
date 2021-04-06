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
            income
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
        console.log(req)
        const user = await User.findByCredentials(email, password)
        console.log("hell!")
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" })
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.editProfile = async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        const firstName = user.firstName
        const lastName = user.lastName
        const gender = user.gender
        const dob = user.dob

        if (firstName == req.body.firstName) {
            return res.status(409).json({
                message: "First name had no changes."
            })
        }
        if (lastName == req.body.lastName) {
            return res.status(409).json({
                message: "Last name had no changes."
            })
        }
        if (gender == req.body.gender) {
            return res.status(409).json({
                message: "Gender had no changes."
            })
        }
        if (dob == req.body.dob) {
            return res.status(409).json({
                message: "Date of birth had no changes."
            })
        }
        await User.editProfile(req.body)
        return res.status(201).json({
            message: "Successful Change"
        })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.getUserDetails = async (req, res) => {
    await res.json(req.userData)
}