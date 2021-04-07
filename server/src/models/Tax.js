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
        { tax_percentage: 1 }
    )
    return car_flat_600.tax_percentage
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
        { tax_percentage: 1 }
    )
    return car_flat_1000.tax_percentage
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
        { tax_percentage: 1 }
    )
    return car_flat_1600.tax_percentage
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
        { tax_percentage: 1 }
    )
    return car_flat_3000.tax_percentage
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
        { tax_percentage: 1 }
    )
    return motor_flat_200.tax_percentage
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
        { tax_percentage: 1 }
    )
    return motor_flat_1000.tax_percentage
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


taxSchema.statics.option_fee_2room = async function() {
    const option_fee_2room = await Tax.findOne(
        { tax_name: "Option Fee 2Rm" },
        { tax_cost: 1 }
    )
    return option_fee_2room.tax_cost
    }

taxSchema.statics.option_fee_3room = async function() {
    const option_fee_3room = await Tax.findOne(
        { tax_name: "Option Fee 3Rm" },
        { tax_cost: 1 }
    )
    return option_fee_3room.tax_cost
    }

taxSchema.statics.option_fee_4room = async function() {
    const option_fee_4room = await Tax.findOne(
        { tax_name: "Option Fee 4Rm" },
        { tax_cost: 1 }
    )
    return option_fee_4room.tax_cost
    }

taxSchema.statics.stamp_duty_f180000 = async function() {
    const stamp_duty_180000 = await Tax.findOne(
        { tax_name: "Stamp Duty first 180000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_180000.tax_percentage
    }    

taxSchema.statics.stamp_duty_n180000 = async function() {
    const stamp_duty_n180000 = await Tax.findOne(
        { tax_name: "Stamp Duty next 180000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_n180000.tax_percentage
    }    
    
taxSchema.statics.stamp_duty_n640000 = async function() {
    const stamp_duty_640000 = await Tax.findOne(
        { tax_name: "Stamp Duty next 640000" },
        { tax_percentage: 1 }
    )
    return stamp_duty_640000.tax_percentage
    }    

taxSchema.statics.stamp_duty_remain = async function() {
    const stamp_duty_remain = await Tax.findOne(
        { tax_name: "Stamp Duty remaining" },
        { tax_percentage: 1 }
    )
    return stamp_duty_remain.tax_percentage
    }  

taxSchema.statics.conveyance_fee_f30000 = async function() {
    const conveyance_fee_f30000 = await Tax.findOne(
        { tax_name: "Conveyancing fee first 30000" },
        { tax_percentage: 1 }
    )
    return conveyance_fee_f30000.tax_percentage
    }  

taxSchema.statics.conveyance_fee_n30000 = async function() {
    const conveyance_fee_n30000 = await Tax.findOne(
        { tax_name: "Conveyancing fee next 30000" },
        { tax_percentage: 1 }
    )
    return conveyance_fee_n30000.tax_percentage
    }  

taxSchema.statics.conveyance_fee_remain = async function() {
    const conveyance_fee_remain = await Tax.findOne(
        { tax_name: "Conveyancing fee remaining" },
        { tax_percentage: 1 }
    )
    return conveyance_fee_remain.tax_percentage
    }  

taxSchema.statics.caveat_registration = async function() {
    const caveat_registration = await Tax.findOne(
        { tax_name: "Caveat Registration fee" },
        { tax_cost: 1 }
    )
    return caveat_registration.tax_cost
    }  

taxSchema.statics.home_insurance = async function() {
    const home_insurance = await Tax.findOne(
        { tax_name: "Home Insurance Premium" },
        { tax_cost: 1 }
    )
    return home_insurance.tax_cost
    }  


const Tax = mongoose.model("Tax", taxSchema, "tax") //create model

module.exports = Tax