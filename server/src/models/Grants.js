/**
 * The data layer for grant calculations and data
 * @module Grants
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/**
 * Creates a grant instance
 * @constructor grantSchema
 */
const grantSchema = new Schema({
    type: {
        type: String
    },
    grant_name: {
        type: String
    },
    grant_amt: {
        type: Number
    },
    grant_description: {
        type: String
    },
    income_ceiling: {
        type: Number
    },
    hdb_type: {
        type: String
    },
    hdb_room_min: {
        type: Number
    },
    hdb_room_max: {
        type: Number
    },
    sg_citizenship: {
        type: Number
    }
})

/**
 * Returns the baby bonus grant for 1 child
 * @returns {number} The grant given if raising 1 child
 */
grantSchema.statics.baby_bonus_1 = async function() {
    const baby_bonus_1 = await Grants.findOne(
        { grant_name: "Baby Bonus 1" },
        { grant_amt: 1 }
    )
    return baby_bonus_1.grant_amt
}

/**
 * Returns the baby bonus grant for 2 children
 * @returns {number} The grant given if raising 2 children
 */
grantSchema.statics.baby_bonus_2 = async function() {
    const baby_bonus_2 = await Grants.findOne(
        { grant_name: "Baby Bonus 2" },
        { grant_amt: 1 }
    )
    return baby_bonus_2.grant_amt
}

/**
 * Returns the baby bonus grant for 3 children
 * @returns {number} The grant given if raising 3 children
 */
grantSchema.statics.baby_bonus_3 = async function() {
    const baby_bonus_3 = await Grants.findOne(
        { grant_name: "Baby Bonus 3" },
        { grant_amt: 1 }
    )
    return baby_bonus_3.grant_amt
}

/**
 * Returns the baby bonus first step grant, which will be saved into
 * CDA, a special savings account for your child when a child successfully joins
 * the be Baby Bonus Scheme
 * @returns {number} The first step grant saved in the CDA for every successfully registered child
 */
grantSchema.statics.baby_bonus_step = async function() {
    const baby_bonus_step = await Grants.findOne(
        { grant_name: "Baby Bonus CDA" },
        { grant_amt: 1 }
    )
    return baby_bonus_step.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 5500sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 5500sgd
 */
grantSchema.statics.ehg_9 = async function() {
    const ehg_9 = await Grants.findOne(
        { grant_name: "EHG 9" },
        { grant_amt: 1 }
    )
    return ehg_9.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 6000sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 6000sgd
 */
grantSchema.statics.ehg_10 = async function() {
    const ehg_10 = await Grants.findOne(
        { grant_name: "EHG 10" },
        { grant_amt: 1 }
    )
    return ehg_10.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 6500sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 6500sgd
 */
grantSchema.statics.ehg_11 = async function() {
    const ehg_11 = await Grants.findOne(
        { grant_name: "EHG 11" },
        { grant_amt: 1 }
    )
    return ehg_11.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 7000sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 7000sgd
 */
grantSchema.statics.ehg_12 = async function() {
    const ehg_12 = await Grants.findOne(
        { grant_name: "EHG 12" },
        { grant_amt: 1 }
    )
    return ehg_12.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 7500sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 7500sgd 
 */
grantSchema.statics.ehg_13 = async function() {
    const ehg_13 = await Grants.findOne(
        { grant_name: "EHG 13" },
        { grant_amt: 1 }
    )
    return ehg_13.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 8000sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 8000sgd 
 */
grantSchema.statics.ehg_14 = async function() {
    const ehg_14 = await Grants.findOne(
        { grant_name: "EHG 14" },
        { grant_amt: 1 }
    )
    return ehg_14.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 8500sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 8500sgd
 */
grantSchema.statics.ehg_15 = async function() {
    const ehg_15 = await Grants.findOne(
        { grant_name: "EHG 15" },
        { grant_amt: 1 }
    )
    return ehg_15.grant_amt
}

/**
 * Returns the enhanced CPF Housing Grant for households with income ceiling of 9000sgd
 * @returns {number} The enhanced CPF Housing Grant for households with income ceiling of 9000sgd
 */
grantSchema.statics.ehg_16 = async function() {
    const ehg_16 = await Grants.findOne(
        { grant_name: "EHG 16" },
        { grant_amt: 1 }
    )
    return ehg_16.grant_amt
}

const Grants = mongoose.model("Grants", grantSchema, "grants") //create model
module.exports = Grants