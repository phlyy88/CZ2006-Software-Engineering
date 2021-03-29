const mongoose = require("mongoose")
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const coeSchema = new Schema({
    time_period: {
        type: Date
    },
    coe_price: {
        type: Number
    }
})

// Define COE Entity methods here
// coeSchema.methods.calculateCOE = async function() {

// }


const COE = mongoose.model("COE", coeSchema) //create model

module.exports = COE