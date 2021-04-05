const Housing = require('../models/Housing')
const Tax = require('../models/Tax')

exports.getHousingDetails = async (req, res) => {
    Housing.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving housing info"
            })
        })
}


exports.calculateCosthdb = async (req, res) => {
    try {
        const selectedVehicle = req.body
        console.log(req.body)
        const omv = selectedVehicle.omv
        console.log(omv)
        const category = selectedVehicle.category
        console.log(category)
        const ves_cost = selectedVehicle.ves_cost
        console.log(ves_cost)
        const engine_capacity = selectedVehicle.engine_capacity

        const registration_fee = await Tax.registration_fee()
        const gst = omv * await Tax.gst()

        var excise_duty
        if (category=='D') {
            excise_duty = omv * await Tax.excise_duty_D()
        } else {
            excise_duty = omv * await Tax.excise_duty()
        }

        var ves
        if (ves_cost=="A1") {
            ves = await Tax.ves_a1()
        } else if (ves_cost=="A2") {
            ves = await Tax.ves_a2()
        } else if (ves_cost=='B') {
            ves = await Tax.ves_b()
        } else if (ves_cost=="C1") {
            ves = await Tax.ves_c1()
        } else if (ves_cost=="C2") {
            ves = await Tax.ves_C2()
        }

        var arf
        if (omv <= 20000) {
            arf = omv
        } else if (omv>20000 && omv<=50000) {
            arf = await Tax.by_OMV_ARF_2() * (omv-20000)
            arf = arf + await Tax.by_OMV_ARF_1() * 20000
        } else if (omv>50000) {
            arf = await Tax.by_OMV_ARF_3() * (omv-50000)
            arf = arf + await Tax.by_OMV_ARF_2() * (omv-20000 - (omv-50000))
            arf = arf + await Tax.by_OMV_ARF_1() * 20000
        }

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

        var cost_object = {
            registration_fee: registration_fee, 
            gst: gst,
            excise_duty: excise_duty,
            ves: ves,
            arf: arf,
            road_tax: road_tax
        }

        res.status(201).json({ cost_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}