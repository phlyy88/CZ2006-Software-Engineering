const { Int32 } = require("bson");
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const HDBSchema = new Schema({
    _id: {
        type: objectid
    },
    month: {
        type: String,
    },
    town: {
        type: String,
    },
    flat_type: {
        type: String,
        enum: ['3 ROOM', '4 ROOM', '5 ROOM', 'EXECUTIVE', '2 ROOM']
    },
    block: {
        type: String,
    },
    street_name: {
        type: String,
    },
    storey_range: {
        type: String,
    },
    floor_area_sqm: {
        type: Int32
    },
    flat_model: {
        type: String,
    },
    lease_commence_date: {
        type: Int32
    },
    remaining_lease: {
        type: String,
    },
    resale_price: {
        type: String,
    }
})

const HDB = mongoose.model("HDB", HDBSchema, "HDB") //create model

module.exports = HDB