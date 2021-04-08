const Vehicle = require('../models/Vehicle')
const Tax = require('../models/Tax')

exports.getVehicleDetails = async (req, res) => {
    Vehicle.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving vehicle info"
            })
        })
}

exports.calculateCostVehicle = async (req, res) => {
    try {
        const selectedVehicle = req.body
        console.log(req.body)
        const omv = selectedVehicle.omv
        console.log(omv)
        const category = selectedVehicle.category
        console.log(category)
        const ves_cost = selectedVehicle.ves_cost
        
        const engine_capacity = selectedVehicle.engine_capacity

        const registration_fee = await Tax.registration_fee()
        const gst_perc = await Tax.gst()
        const gst = omv * gst_perc
        console.log(gst)

        var excise_duty, excise_duty_perc
        if (category=='D') {
            excise_duty_perc = await Tax.excise_duty_D()
            excise_duty = omv * excise_duty_perc
        } else {
            excise_duty_perc = await Tax.excise_duty()
            excise_duty = omv * excise_duty_perc
        }
        console.log("excise duty passed")
        console.log(ves_cost)
        var ves
        if (ves_cost=="A1") {
            ves = await Tax.ves_a1()
        }
        if (ves_cost=="A2") {
            ves = await Tax.ves_a2()
        }
        if (ves_cost=="B") {
            ves = await Tax.ves_b()
        }
        if (ves_cost=="C1") {
            ves = await Tax.ves_c1()
        }
        if (ves_cost=="C2") {
            ves = await Tax.ves_c2()
        }
        if (ves_cost=="-") {
            ves = 0
        }
            
        // if (ves_cost=="A1") {
        //     ves = await Tax.ves_a1()
        // } else if (ves_cost=="A2") {
        //     ves = await Tax.ves_a2()
        // } else if (ves_cost=="B") {
        //     ves = await Tax.ves_b()
        // } else if (ves_cost=="C1") {
        //     ves = await Tax.ves_c1()
        // } else if (ves_cost=="C2") {
        //     ves = await Tax.ves_C2()
        // }
        console.log("ves passed")

        var arf
        if (omv <= 20000) {
            arf = omv
        } else if (omv>20000 && omv<=50000) {
            arf = await Tax.by_OMV_ARF_2() * (omv-20000)
            arf = arf + await Tax.by_OMV_ARF_1() * 20000
        } else if (omv>50000) {
            arf = await Tax.by_OMV_ARF_3() * (omv-50000)
            arf = arf + await Tax.by_OMV_ARF_2() * 30000
            arf = arf + await Tax.by_OMV_ARF_1() * 20000
        }
        console.log(arf)

        var road_tax_percent, road_tax_flat
        if (category=='D') {
            if (engine_capacity<=200) {
                road_tax_percent = await Tax.motor_percent_200()
                road_tax_flat = await Tax.motor_flat_200()
            } else {
                road_tax_percent = await Tax.motor_percent_1000()
                road_tax_flat = await Tax.motor_flat_1000()
            }
        } else {
            if (engine_capacity<=600) {
                road_tax_percent = await Tax.car_percent_600()
                road_tax_flat = await Tax.car_flat_600()
            } else if (engine_capacity>600 && engine_capacity<=1000) {
                road_tax_percent = await Tax.car_percent_1000()
                road_tax_flat = await Tax.car_flat_1000()
            } else if (engine_capacity>1000 && engine_capacity<=1600) {
                road_tax_percent = await Tax.car_percent_1600()
                road_tax_flat = await Tax.car_flat_1600()
            } else {
                road_tax_percent = await Tax.car_percent_3000()
                road_tax_flat = await Tax.car_flat_3000()
            }
        }

        const road_tax = omv * road_tax_percent + road_tax_flat

        const total_cost = registration_fee + gst + excise_duty + ves + arf + road_tax + omv

        var cost_object = {
            omv: omv,
            registration_fee: registration_fee, 
            gst: gst,
            gst_perc: gst_perc,
            excise_duty: excise_duty,
            excise_duty_perc: excise_duty_perc,
            ves: ves,
            arf: arf,
            road_tax_flat: road_tax_flat,
            road_tax_perc: road_tax_percent,
            road_tax: road_tax,
            total_cost: total_cost
        }

        res.status(201).json({ cost_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}