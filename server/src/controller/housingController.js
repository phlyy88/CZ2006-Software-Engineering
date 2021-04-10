const Housing = require('../models/Housing')
const Tax = require('../models/Tax')
const Grants = require('../models/Grants')

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


exports.calculateCostHousing = async (req, res) => {
    try {
        const selectedhdb = req.body
        const price = selectedhdb.price
        const flat_room = selectedhdb.flat_room

        const home_insurance_premium = await Tax.home_insurance()
        const caveat_registration = await Tax.caveat_registration()

        var option_fee
        if (flat_room=="2 ROOM") {
            option_fee = await Tax.option_fee_2room()
        } else if (flat_room=="3 ROOM") {
            option_fee = await Tax.option_fee_3room()
        } else if (flat_room=='4 ROOM' || flat_room=="5 ROOM" || flat_room == "MULTI-GENERATION") {
            option_fee = await Tax.option_fee_4room()
        }

        var stamp_duty
        if (price <= 180000) {
            stamp_duty = await Tax.stamp_duty_f180000() * price
        } else if (price>180000 && price<=360000) {
            stamp_duty = (await Tax.stamp_duty_f180000() * 180000) + await Tax.stamp_duty_n180000() * (price-180000)
        } else if (price>360000 && price<=1000000) {
            stamp_duty = (await Tax.stamp_duty_f180000() * 180000) + (await Tax.stamp_duty_n180000() * 180000) + await Tax.stamp_duty_n640000() *(price-360000)
        }  

        var conveyancefee
        if (price <= 30000) {
            conveyancefee = await Tax.conveyance_fee_f30000() * price/1000
        } else if (price>30000 && price<=60000) {
            conveyancefee = (await Tax.conveyance_fee_f30000() * 30) + (await Tax.conveyance_fee_n30000() * (price-30000)/1000)
        } else {
            conveyancefee = (await Tax.conveyance_fee_f30000() * 30) + (await Tax.conveyance_fee_n30000() * 30) + (await Tax.conveyance_fee_remain() * (price-60000)/1000)
        }

        const total_cost = home_insurance_premium + caveat_registration + option_fee + stamp_duty + conveyancefee + price

        var cost_object = {
            price: price,
            option_fee: option_fee,
            caveat_registration: caveat_registration,
            home_insurance_premium: home_insurance_premium,
            stamp_duty: stamp_duty,
            conveyancefee: conveyancefee,
            total_cost: total_cost
        }

        res.status(201).json({ cost_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.calculateGrantsHousing = async (req, res) => {
    try {
        const income = req.body.income

        var ehg
        if (income==1)
            {ehg = await Grants.ehg_9()}
        else if (income==2)
            {ehg = await Grants.ehg_10()}
        else if (income== 3)
            {ehg = await Grants.ehg_11()}
        else if (income== 4)
            {ehg = await Grants.ehg_12()}
        else if (income== 5)
            {ehg = await Grants.ehg_13()}
        else if (income== 6)
            {ehg = await Grants.ehg_14()}
        else if (income== 7)
            {ehg = await Grants.ehg_15()}
        else if (income== 8)
            {ehg = await Grants.ehg_16()}

        var total_grants = ehg

        var grants_object = {
            total_grants: total_grants
        }
        

        res.status(201).json({ grants_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}