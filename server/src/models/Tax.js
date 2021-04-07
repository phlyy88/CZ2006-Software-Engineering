const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxSchema = new Schema({
    type: {
        type: String
    },
    tax_name: {
        type: String
    },
    tax_cost: {
        type: Number
    },
    tax_percentage: {
        type: Number
    },
    tax_description: {
        type: String
    }
})

taxSchema.statics.registration_fee = async function() {
    const registration_fee = await Tax.findOne(
        { tax_name: "Registration Fee" },
        { tax_cost: 1 }
    )
    return registration_fee.tax_cost
}

taxSchema.statics.by_OMV_ARF_1 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 1" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

taxSchema.statics.by_OMV_ARF_2 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 2" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

taxSchema.statics.by_OMV_ARF_3 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 3" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

taxSchema.statics.gst = async function() {
    const gst = await Tax.findOne(
        { tax_name: "GST" },
        { tax_percentage: 1 }
    )
    return gst.tax_percentage
}

taxSchema.statics.excise_duty_D = async function() {
    const excise_duty = await Tax.findOne(
        { tax_name: "Excise Duty Car" },
        { tax_percentage: 1 }
    )
    return excise_duty.tax_percentage
}

taxSchema.statics.excise_duty = async function() {
    const excise_duty = await Tax.findOne(
        { tax_name: "Excise Duty Motor" },
        { tax_percentage: 1 }
    )
    return excise_duty.tax_percentage
}

taxSchema.statics.car_percent_600 = async function() {
    const car_percent_600 = await Tax.findOne(
        { tax_name: "Road Tax 600 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_600.tax_percentage
}

taxSchema.statics.car_flat_600 = async function() {
    const car_flat_600 = await Tax.findOne(
        { tax_name: "Road Tax 600 Car" },
        { tax_cost: 1 }
    )
    return car_flat_600.tax_cost
}

taxSchema.statics.car_percent_1000 = async function() {
    const car_percent_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_1000.tax_percentage
}

taxSchema.statics.car_flat_1000 = async function() {
    const car_flat_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Car" },
        { tax_cost: 1 }
    )
    return car_flat_1000.tax_cost
}

taxSchema.statics.car_percent_1600 = async function() {
    const car_percent_1600 = await Tax.findOne(
        { tax_name: "Road Tax 1600 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_1600.tax_percentage
}

taxSchema.statics.car_flat_1600 = async function() {
    const car_flat_1600 = await Tax.findOne(
        { tax_name: "Road Tax 1600 Car" },
        { tax_cost: 1 }
    )
    return car_flat_1600.tax_cost
}

taxSchema.statics.car_percent_3000 = async function() {
    const car_percent_3000 = await Tax.findOne(
        { tax_name: "Road Tax 3000 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_3000.tax_percentage
}

taxSchema.statics.car_flat_3000 = async function() {
    const car_flat_3000 = await Tax.findOne(
        { tax_name: "Road Tax 3000 Car" },
        { tax_cost: 1 }
    )
    return car_flat_3000.tax_cost
}

taxSchema.statics.motor_percent_200 = async function() {
    const motor_percent_200 = await Tax.findOne(
        { tax_name: "Road Tax 200 Motor" },
        { tax_percentage: 1 }
    )
    return motor_percent_200.tax_percentage
}

taxSchema.statics.motor_flat_200 = async function() {
    const motor_flat_200 = await Tax.findOne(
        { tax_name: "Road Tax 200 Motor" },
        { tax_cost: 1 }
    )
    return motor_flat_200.tax_cost
}

taxSchema.statics.motor_percent_1000 = async function() {
    const motor_percent_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Motor" },
        { tax_percentage: 1 }
    )
    return motor_percent_1000.tax_percentage
}

taxSchema.statics.motor_flat_1000 = async function() {
    const motor_flat_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Motor" },
        { tax_cost: 1 }
    )
    return motor_flat_1000.tax_cost
}


taxSchema.statics.ves_a1 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_A1" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

taxSchema.statics.ves_a2 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_A2" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

taxSchema.statics.ves_b = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_B" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

taxSchema.statics.ves_c1 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_C1" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

taxSchema.statics.ves_c2 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_C2" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

const Tax = mongoose.model("Tax", taxSchema, "tax") //create model

module.exports = Tax