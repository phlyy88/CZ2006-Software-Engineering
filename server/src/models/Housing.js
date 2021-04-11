/**
 * The data-layer for housing listings
 * @module Housing
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/**
 * Creates a housing instance
 * @constructor housingSchema
 */
const housingSchema = new Schema({
    month: {
        type: String
    },
    town: {
        type: String
    },
    flat_room: {
        type: String
    },
    block: {
        type: String
    },
    street_name: {
        type: String
    },
    storey_range: {
        type: String
    },
    floor_area_sqm: {
        type: Number
    },
    flat_model: {
        type: String
    },
    flat_type: {
        type: String
    },
    lease_commence_date: {
        type: String
    },
    remaining_lease: {
        type: String
    },
    price: {
        type: Number
    },
    Image_URL: {
        type: String
    },
    Facilities: {
        type: String
    }
})

const Housing = mongoose.model("Housing", housingSchema, "housing") //create model

module.exports = Housing