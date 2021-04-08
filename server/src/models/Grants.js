const mongoose = require("mongoose")

const Schema = mongoose.Schema;

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

grantSchema.statics.baby_bonus_1 = async function() {
    const baby_bonus_1 = await Grants.findOne(
        { grant_name: "Baby Bonus 1" },
        { grant_amt: 1 }
    )
    return baby_bonus_1.grant_amt
}

grantSchema.statics.EHG = async function() {
    const EHG = await Grants.findOne(
        { grant_name: "Enhanced CPF Housing Grant" },
        { grant_amt: 1 }
    )
    return EHG.grant_amt
}

grantSchema.statics.Family_grant_4room = async function() {
    const Family_grant_4room = await Grants.findOne(
        { grant_name: "Family Grant 4 room" },
        { grant_amt: 1 }
    )
    return Family_grant_4room.grant_amt
}

grantSchema.statics.Family_grant_5room = async function() {
    const Family_grant_5room = await Grants.findOne(
        { grant_name: "Family Grant 5 room" },
        { grant_amt: 1 }
    )
    return Family_grant_5room.grant_amt
}

grantSchema.statics.proximity_grant = async function() {
    const proximity_grant = await Grants.findOne(
        { grant_name: "HDB proximity Housing Grant" },
        { grant_amt: 1 }
    )
    return proximity_grant.grant_amt
}

const Grants = mongoose.model("Grants", grantSchema, "grants") //create model

module.exports = Grants