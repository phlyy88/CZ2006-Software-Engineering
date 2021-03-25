const { Double } = require("bson");
const mongoose = require("mongoose")
//const COE = require('./models(can be removed)/Coe')
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    category: {
        type: String, 
        enum: ['A', 'B', 'D', 'E']
    },
    category_description: {
        type: String
    },
    brand: {
        type: String
    },
    name: {
        type: String
    },
    product_description: {
        type: String
    },
    omv: {
        type: String
    },
    passenger_capacity: {
        type: Number
    },
    engine_capacity:{ 
        type: String,
        required: true
    },
    // insurance_cost: {
    //     type: Number
    // },
    ves_cost:{
        type: String,
        enum: ['A1', 'A2', 'B', 'C1', 'C2']
    },
    maintainence_cost:{
        type: Double
    },
    length_mm:{
        type: Number
    },
    height_mm: {
        type: Number
    }, 
    width_mm: {
        type: Number
    },
    top_speed: {
        type: Number
    },
    kerb_weight_kg:{
        type: Number
    },
    fuel_consumption_km_per_litre:{
        type:Double
    }
})

// Define Vehicle Entity Methods



// //this method will hash the password before saving the user model
// userSchema.pre("save", async function(next) {
//     const user = this
//     if (user.isModified("password")) {
//       user.password = await bcrypt.hash(user.password, 8)
//     }
//     next()
// })
  
// //this method generates an auth token for the user
// userSchema.methods.generateAuthToken = async function() {
//     const user = this
//     const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
//     "secret")
//     user.tokens = user.tokens.concat({ token })
//     await user.save()
//     return token
// }
  
// //this method search for a user by email and password.
// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({ email })
//     if (!user) {
//         throw new Error({ error: "Invalid login details" })
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password)
//     if (!isPasswordMatch) {
//         throw new Error({ error: "Invalid login details" })
//     }
//     return user
// }

const Vehicle = mongoose.model("Vehicle", VehicleSchema) //create model

module.exports = Vehicle