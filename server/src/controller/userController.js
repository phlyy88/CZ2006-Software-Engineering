const User = require("../models/User")

/**
 * Creates an instance of registerNewUser
 * @author GQ
 * @param {object} req 
 * @param {object} res 
 * @returns {object} Status of authentication error
 */
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

/**
 * Creates an instance of loginUser
 * @param {object} req 
 * @param {object} res 
 * @returns {object} Status of authentication error
 */
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

// exports.editUser = async(req, res) => {
    
// }

/**
 * Creates an instance of getUserDetails
 * @param {object} req 
 * @param {object} res 
 */
exports.getUserDetails = async (req, res) => {
    await res.json(req.userData)
}