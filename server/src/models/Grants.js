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


const Grants = mongoose.model("Grants", grantSchema, "grants") //create model

module.exports = Grants