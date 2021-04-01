const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const housingSchema = new Schema({
    location: {
        type: String
    },
    district: {
        type: String
    },
    image_url: {
        type: String
    },
    flat_name: {
        type: String
    },
    launch_date: {
        type: Date
    },
    expected_year_of_completion: {
        type: String
    },
    facilities: {
        type: String
    },
    room_types: {
        type: String
    },
    no_of_blocks: {
        type: Number
    },
    no_of_units: {
        type: Number
    },
    no_of_2_room_flexi_units: {
        type: Number
    },
    two_room_flexi_39_to_40sqm_price_before_grants: {
        type: String
    },
    two_room_flexi_47_to_48sqm_price_before_grants: {
        type: String
    },
    no_of_3_room_units: {
        type: Number
    },
    three_room_price_before_grants: {
        type: String
    },
    no_of_4_room_units: {
        type: Number
    },
    four_room_price_before_grants: {
        type: String
    },
    no_of_5_room_units: {
        type: Number
    },
    five_room_price_before_grants: {
        type: String
    },
    no_of_3_gen_units: {
        type: Number
    },
    third_gen_price_before_grants: {
        type: String
    }
})

const Housing = mongoose.model("Housing", housingSchema, "housing") //create model

module.exports = Housing