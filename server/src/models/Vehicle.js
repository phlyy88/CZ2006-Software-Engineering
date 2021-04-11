/**
 * The data layer for vehicles
 * @module Vehicle
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/**
 * Creates a vehicle instance
 * @constructor vehicleSchema
 */
const vehicleSchema = new Schema({
    category: {
        type: String
    },
    category_description: {
        type: String
    },
    brand: {
        type: String
    },
    image_url: {
        type: String
    },
    name: {
        type: String
    },
    product_description: {
        type: String
    },
    omv: {
        type: Number
    },
    passenger_capacity: {
        type: Number
    },
    engine_capacity: {
        type: Number
    },
    insurance_cost: {
        type: Number
    },
    ves_cost: {
        type: String,
    },
    maintainence_cost: {
        type: String
    },
    length_mm: {
        type: Number
    },
    height_mm: {
        type: Number
    },
    width_mm: {
        type: Number
    },
    top_speed: {
        type: Number
    },
    kerb_weight_kg: {
        type: Number
    },
    fuel_consumption_km_per_litre: {
        type: Number
    },
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema, "vehicle") //create model
module.exports = Vehicle