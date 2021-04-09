const mongoose = require("mongoose")
const { ObjectID } = require("bson");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    ID: {
        type: ObjectID
    },
    HDB: {
        type: Object
    },
    Vehicle: {
        type: Object
    },
    Children: {
        type: Object
    }
})
  
//this method search for a user by email and password.
planSchema.statics.findByPlan = async (ID) => {
    const plan = await Plan.findOne({ ID })
    return plan
}

const Plan = mongoose.model("Plan", planSchema) //create model

module.exports = Plan
