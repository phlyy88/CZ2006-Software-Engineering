const { Double } = require("bson");
const mongoose = require("mongoose")
const Vehicle = require('./models(can be removed)/Vehicle')
const COE = require('./models(can be remove)/Coe')
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const taxSchema = new Schema({
    type: {
        type: String, 
        enum: ['Vehicle' ,'Housing']
    },
    tax_name: {
        type: String
    },
    tax_cost: {
        type: Number
    },
    tax_percentage: {
        type: Double
    },
    tax_description: {
        type: String
    }
})

// Define entity Methods
VehicleSchema.methods.getTaxName = async function(){
    return this.tax_name
}

VehicleSchema.methods.getTaxCost = async function(){
    return this.tax_cost
}

VehicleSchema.methods.getTaxCost = async function(){
    return this.tax_cost
}

VehicleSchema.methods.getTaxPercentage = async function(){
    return this.tax_percentage
}

VehicleSchema.methods.getTaxDescription = async function(){
    return this.tax_description
}


const Tax = mongoose.model("Tax", taxSchema) //create model

module.exports =Tax