/**
 * The data layer for childcare listings
 * @module Childcare
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/**
 * Creates a childcare instance
 * @constructor childcareSchema
 */
const childcareSchema = new Schema({
    childcare_organization: {
        type: String,
    },
    cost_for_Singaporeans: {
        type: Number
    },
    cost_for_PRs: {
        type: Number
    },
    cost_for_foreigners: {
        type: Number
    },
    level: {
        type: String,
        enum: ['Pre Nursery/Playgroup', 'Nursery/Kindergarten']
    },
    basic_subsidy_for_working_parents: {
        type: Number
    },
    maximum_subsidy_for_working_parents: {
        type: Number
    },
    basic_subsidy_for_non_working_parents: {
        type: Number
    },
    maximum_subsidy_for_non_working_parents: {
        type: Number
    },
    child_age: {
        type: String,
        enum: ['18 Months to 2 Years Old', '3 to 6']
    },
    full_half_day: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Private', 'Government']
    },
    registration_fee: {
        type: Number
    }
})

const Childcare = mongoose.model("Childcare", childcareSchema, "childcare") //create model

module.exports = Childcare