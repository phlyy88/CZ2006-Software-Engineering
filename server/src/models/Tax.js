/**
 * The data layer for tax calculations and data
 * @module Tax
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Creates a tax instance
 * @constructor taxSchema
 */
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

/**
 * Returns the one-time registration fee to be paid when purchasing a vehicle
 * @returns {number} The one-time registration fee to be paid when purchasing a vehicle
 */
taxSchema.statics.registration_fee = async function() {
    const registration_fee = await Tax.findOne(
        { tax_name: "Registration Fee" },
        { tax_cost: 1 }
    )
    return registration_fee.tax_cost
}

/**
 * Retuns the percentage of vehicle's OMV to be paid as additional registration fee 
 * for the first $20,000 of a vehicle's OMV
 * @returns {number} The percentage to be paid as additional registration fee 
 * for the first $20,000 of a vehicle's OMV
 */
taxSchema.statics.by_OMV_ARF_1 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 1" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

/**
 * Returns the percentage of vehicle's OMV to be paid as additional registration fee 
 * for the next $30,000 of a vehicle's OMV, if vehicle's OMV exceeds $20,000
 * @returns {number} The percentage of vehicle's OMV to be paid as additional registration fee 
 * for the next $30,000 of a vehicle's OMV, if vehicle's OMV exceeds $20,000
 */
taxSchema.statics.by_OMV_ARF_2 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 2" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

/**
 * Returns the percentage of vehicle's OMV to be paid as additional registration fee 
 * for the any remaining amount above $50,000
 * @returns {number} The percentage of vehicle's OMV to be paid as additional registration fee 
 * for the any remaining amount above $50,000
 */
taxSchema.statics.by_OMV_ARF_3 = async function() {
    const arf = await Tax.findOne(
        { tax_name: "Additional Registration Fee 3" },
        { tax_percentage: 1 }
    )
    return arf.tax_percentage
}

/**
 * Returns the good and service tax rate to be paid when purchasing a vehicle
 * @returns {number} The good and service tax rate to be paid when purchasing a vehicle
 */
taxSchema.statics.gst = async function() {
    const gst = await Tax.findOne(
        { tax_name: "GST" },
        { tax_percentage: 1 }
    )
    return gst.tax_percentage
}

/**
 * Returns excise duty rate to be paid when purchasing a car
 * @returns {number} The excise duty rate to be paid when purchasing a car
 */
taxSchema.statics.excise_duty_D = async function() {
    const excise_duty = await Tax.findOne(
        { tax_name: "Excise Duty Car" },
        { tax_percentage: 1 }
    )
    return excise_duty.tax_percentage
}

/**
 * Returns the excise duty rate to be paid when purchasing a motorcycle
 * @returns {number} The excise duty rate to be paid when purchasing a motorcycle
 */
taxSchema.statics.excise_duty = async function() {
    const excise_duty = await Tax.findOne(
        { tax_name: "Excise Duty Motor" },
        { tax_percentage: 1 }
    )
    return excise_duty.tax_percentage
}

/**
 * Returns the road tax percentage to be paid for the first 600cc of car's engine capacity 
 * @returns {number} The road tax percentage to be paid for the first 600cc of car's engine capacity 
 */
taxSchema.statics.car_percent_600 = async function() {
    const car_percent_600 = await Tax.findOne(
        { tax_name: "Road Tax 600 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_600.tax_percentage
}

/**
 * Returns the road tax cost to be paid for the first 600cc of car's engine capacity
 * @returns {number} The road tax cost to be paid for the first 600cc of car's engine capacity
 */
taxSchema.statics.car_flat_600 = async function() {
    const car_flat_600 = await Tax.findOne(
        { tax_name: "Road Tax 600 Car" },
        { tax_cost: 1 }
    )
    return car_flat_600.tax_cost
}

/**
 * Returns the road tax percentage to be paid for additional engine capacity above
 * 600cc, below 1000cc (inclusive), i.e. 600cc < EC <= 1000cc, of car
 * @returns {number} The road tax percentage to be paid for additional engine capacity above
 * 600cc, below 1000cc (inclusive), of car
 */
taxSchema.statics.car_percent_1000 = async function() {
    const car_percent_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_1000.tax_percentage
}

/**
 * Returns the road tax cost to be paid for the next 400cc (after first 600cc) of 
 * car's engine capacity
 * @returns {number} The road tax cost to be paid for the next 400cc (after first 600cc) of 
 * car's engine capacity
 */
taxSchema.statics.car_flat_1000 = async function() {
    const car_flat_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Car" },
        { tax_cost: 1 }
    )
    return car_flat_1000.tax_cost
}

/**
 * Returns the road tax percentage to be paid for additional engine capacity above
 * 1000cc, below 1600cc (inclusive), i.e. 1000cc < EC <= 1600cc, of car
 * @returns {number} The road tax percentage to be paid for additional engine capacity above
 * 1000cc, below 1600cc (inclusive), i.e. 1000cc < EC <= 1600cc, of car
 */
taxSchema.statics.car_percent_1600 = async function() {
    const car_percent_1600 = await Tax.findOne(
        { tax_name: "Road Tax 1600 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_1600.tax_percentage
}

/**
 * Returns the road tax cost to be paid for the next 600cc (after first 1000cc) of 
 * car's engine capacity
 * @returns {number} The road tax cost to be paid for the next 600cc (after first 1000cc) of 
 * car's engine capacity
 */
taxSchema.statics.car_flat_1600 = async function() {
    const car_flat_1600 = await Tax.findOne(
        { tax_name: "Road Tax 1600 Car" },
        { tax_cost: 1 }
    )
    return car_flat_1600.tax_cost
}

/**
 * Returns the road tax percentage to be paid for additional engine capacity above
 * 1600cc, below 3000cc (inclusive), i.e. 1600cc < EC <= 3000cc, of car
 * @returns {number} The road tax percentage to be paid for additional engine capacity above
 * 1600cc, below 3000cc (inclusive), i.e. 1600cc < EC <= 3000cc, of car
 */
taxSchema.statics.car_percent_3000 = async function() {
    const car_percent_3000 = await Tax.findOne(
        { tax_name: "Road Tax 3000 Car" },
        { tax_percentage: 1 }
    )
    return car_percent_3000.tax_percentage
}

/**
 * Returns the road tax percentage to be paid for the next 1400cc (after first 1600cc) of 
 * car's engine capacity
 * @returns {number} The road tax cost to be paid for the next 1400cc (after first 1600cc) of 
 * car's engine capacity
 */
taxSchema.statics.car_flat_3000 = async function() {
    const car_flat_3000 = await Tax.findOne(
        { tax_name: "Road Tax 3000 Car" },
        { tax_cost: 1 }
    )
    return car_flat_3000.tax_cost
}

/**
 * Returns the road tax percentage to be paid for the first 200cc of 
 * motorcycle's engine capacity
 * @returns {number} The road tax percentage to be paid for the first 200cc of 
 * motorcycle's engine capacity
 */
taxSchema.statics.motor_percent_200 = async function() {
    const motor_percent_200 = await Tax.findOne(
        { tax_name: "Road Tax 200 Motor" },
        { tax_percentage: 1 }
    )
    return motor_percent_200.tax_percentage
}

/**
 * Returns the road tax cost to be paid for the first 200cc of 
 * motorcycle's engine capacity
 * @returns {number} The road tax cost to be paid for the first 200cc of 
 * motorcycle's engine capacity
 */
taxSchema.statics.motor_flat_200 = async function() {
    const motor_flat_200 = await Tax.findOne(
        { tax_name: "Road Tax 200 Motor" },
        { tax_cost: 1 }
    )
    return motor_flat_200.tax_cost
}

/**
 * Returns the road tax percentage to be paid for the next 800cc (after first 200cc)
 * of motorcycle's engine capacity
 * @returns {number} The road tax percentage to be paid for the next 800cc (after first 200cc)
 * of motorcycle's engine capacity
 */
taxSchema.statics.motor_percent_1000 = async function() {
    const motor_percent_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Motor" },
        { tax_percentage: 1 }
    )
    return motor_percent_1000.tax_percentage
}

/**
 * Returns the road tax cost to be paid for the next 800cc (after first 200cc)
 * of motorcycle's engine capacity
 * @returns {number} The road tax cost to be paid for the next 800cc (after first 200cc)
 * of motorcycle's engine capacity
 */
taxSchema.statics.motor_flat_1000 = async function() {
    const motor_flat_1000 = await Tax.findOne(
        { tax_name: "Road Tax 1000 Motor" },
        { tax_cost: 1 }
    )
    return motor_flat_1000.tax_cost
}

/**
 * Returns the tax to be paid for vehicle emissions, 
 * under vehicle emissions scheme (VES),
 * for vehicles in band A1 (CO2 ≤ 100)
 * @returns {number} VES tax to be paid by vehicles in band A1
 */
taxSchema.statics.ves_a1 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_A1" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

/**
 * Returns the tax to be paid for vehicle emissions, 
 * under vehicle emissions scheme (VES),
 * for vehicles in band A2 (100 < CO2 ≤ 120)
 * @returns {number} VES tax to be paid by vehicles in band A2
 */
taxSchema.statics.ves_a2 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_A2" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

/**
 * Returns the tax to be paid for vehicle emissions, 
 * under vehicle emissions scheme (VES),
 * for vehicles in band B (160 < CO2 ≤ 210)
 * @returns {number} VES tax to be paid by vehicles in band B
 */
taxSchema.statics.ves_b = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_B" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

/**
 * Returns the tax to be paid for vehicle emissions, 
 * under vehicle emissions scheme (VES),
 * for vehicles in band C1 (210 < CO2 ≤ 230)
 * @returns {number} VES tax to be paid by vehicles in band C1
 */
taxSchema.statics.ves_c1 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_C1" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

/**
 * Returns the tax to be paid for vehicle emissions, 
 * under vehicle emissions scheme (VES),
 * for vehicles in band C2 (230 < CO2 ≤ 250)
 * @returns {number} VES tax to be paid by vehicles in band C2
 */
taxSchema.statics.ves_c2 = async function() {
    const ves_cost = await Tax.findOne(
        { tax_name: "VES_C2" },
        { tax_cost: 1 }
    )
    return ves_cost.tax_cost
}

/**
 * Returns the option fee to be paid for 2-room flats
 * @returns {number} The option fee to be paid for 2-room flats
 */
taxSchema.statics.option_fee_2room = async function() {
    const option_fee_2room = await Tax.findOne(
        { tax_name: "Option Fee 2Rm" },
        { tax_cost: 1 }
    )
    return option_fee_2room.tax_cost
}

/**
 * Returns the option fee to be paid for 3-room flats
 * @returns {number} The option fee to be paid for 3-room flats
 */    
taxSchema.statics.option_fee_3room = async function() {
    const option_fee_3room = await Tax.findOne(
        { tax_name: "Option Fee 3Rm" },
        { tax_cost: 1 }
    )
    return option_fee_3room.tax_cost
}

/**
 * Returns the option fee to be paid for 4-room flats
 * @returns {number} The option fee to be paid for 4-room flats
 */
taxSchema.statics.option_fee_4room = async function() {
    const option_fee_4room = await Tax.findOne(
        { tax_name: "Option Fee 4Rm" },
        { tax_cost: 1 }
    )
    return option_fee_4room.tax_cost
}

/**
 * Returns the stamp duty rate to be paid for first $180,000 of house's purchase price
 * @returns {number} The stamp duty rate to be paid for first $180,000 of house's purchase price
 */
taxSchema.statics.stamp_duty_f180000 = async function() {
    const stamp_duty_180000 = await Tax.findOne(
        { tax_name: "Stamp Duty first 180000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_180000.tax_percentage
}    

/**
 * Returns the stamp duty rate to be paid for next $180,000 (after first $180,000)
 * of house's purchase price
 * @returns {number} The stamp duty rate to be paid for next $180,000 (after first $180,000)
 * of house's purchase price
 */    
taxSchema.statics.stamp_duty_n180000 = async function() {
    const stamp_duty_n180000 = await Tax.findOne(
        { tax_name: "Stamp Duty next 180000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_n180000.tax_percentage
}

/**
 * Returns the stamp duty rate to be paid for next $640,000 (after first $360,000)
 * of house's purchase price
 * @returns {number} The stamp duty rate to be paid for next $640,000 (after first $360,000)
 * of house's purchase price
 */      
taxSchema.statics.stamp_duty_n640000 = async function() {
    const stamp_duty_640000 = await Tax.findOne(
        { tax_name: "Stamp Duty next 640000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_640000.tax_percentage
}

/**
 * Returns the stamp duty rate to be paid for remaining amount (after first $1,000,000)
 * of house's purchase price
 * @returns {number} Returns the stamp duty rate to be paid for remaining amount (after first $1,000,000)
 * of house's purchase price
 */ 
taxSchema.statics.stamp_duty_remain = async function() {
    const stamp_duty_remain = await Tax.findOne(
        { tax_name: "Stamp Duty remaining" },
        { tax_percentage: 1 }
    )
    return stamp_duty_remain.tax_percentage
}  

/**
 * Returns the conveyance fee rate that will be charged per $1000 for the first $30,000
 * of house's purchase price
 * @returns {number} The conveyance fee rate that will be charged per $1000 for the first $30,000
 * of house's purchase price
 */ 
taxSchema.statics.conveyance_fee_f30000 = async function() {
    const conveyance_fee_f30000 = await Tax.findOne(
        { tax_name: "Conveyancing fee first 30000" },
        { tax_cost: 1 }
    )
    return conveyance_fee_f30000.tax_cost
}

/**
 * Returns the conveyance fee rate that will be charged per $1000 for the first $30,000
 * (after first $30,000) of house's purchase price
 * @returns {number} The conveyance fee rate that will be charged per $1000 for the first $30,000
 * (after first $30,000) of house's purchase price
 */ 
taxSchema.statics.conveyance_fee_n30000 = async function() {
    const conveyance_fee_n30000 = await Tax.findOne(
        { tax_name: "Conveyancing fee next 30000" },
        { tax_cost: 1 }
    )
    return conveyance_fee_n30000.tax_cost
}  

/**
 * Returns the conveyance fee rate that will be charged per $1000 for the remaining amount
 * (after first $60,000) of house's purchase price
 * @returns {number} The conveyance fee rate that will be charged per $1000 for the remaining amount
 * (after first $60,000) of house's purchase price
 */ 
taxSchema.statics.conveyance_fee_remain = async function() {
    const conveyance_fee_remain = await Tax.findOne(
        { tax_name: "Conveyancing fee remaining" },
        { tax_cost: 1 }
    )
    return conveyance_fee_remain.tax_cost
}  

/**
 * Returns the caveat registration fee when purchasing a house
 * @returns {number} The caveat registration fee when purchasing a house
 */ 
taxSchema.statics.caveat_registration = async function() {
    const caveat_registration = await Tax.findOne(
        { tax_name: "Caveat Registration fee" },
        { tax_cost: 1 }
    )
    return caveat_registration.tax_cost
}  

/**
 * Returns the home insurance to be purchased when purchasing a house
 * @returns {number} The home insurance to be purchased when purchasing a house
 */ 
taxSchema.statics.home_insurance = async function() {
    const home_insurance = await Tax.findOne(
        { tax_name: "Home Insurance Premium" },
        { tax_cost: 1 }
    )
    return home_insurance.tax_cost
}  

const Tax = mongoose.model("Tax", taxSchema, "tax") //create model
module.exports = Tax