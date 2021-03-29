const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const childcareSchema = new Schema ({
    childcare_organization:{
        type: String
    },
    cost_for_Singaporeans:{
        type: Float32Array
    },
    cost_for_PRs:{
        type: Float32Array
    },
    cost_for_foreigners:{
        type: Float32Array
    },
    level:{
        type: String,
        enum:['Pre Nursery/Playgroup', 'Nursery/Kindergarten']
    },
    basic_subsidy_for_working_parents:{
        type: Float32Array
    },
    maximum_subsidy_for_working_parents:{
        type: Float32Array
    },
    basic_subsidy_for_non_working_parents:{
        type: Float32Array
    },
    maximum_subsidy_for_non_working_parents:{
        type: Float32Array
    },
    child_age:{
        type: String,
        enum:['18 Months to 2 Years Old', '3 to 6']
    },
    full_half_day:{
        type: String,
        enum:['Half Day (7am - 1pm)', 'Full Day (7am - 7pm)']
    },
    type:{
        type: String,
        enum:['Private','Government']
    },
    registration_fee:{
        type: Float32Array
    }
})