const Childcare = require('../models/Childcare')
const Grants = require('../models/Grants')

exports.getChildcareDetails = async (req, res) => {
    Childcare.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving childcare info"
            })
        })
}

exports.calculateCostchild = async (req, res) => {
    try {
        const selectedchildcare = req.body
        console.log(req.body)
        const registration_cost = selectedchildcare.registration_fee
        console.log(registration_cost)
        const monthly_cost = selectedchildcare.cost_for_Singaporeans
        console.log(monthly_cost)

        const total_cost = registration_cost + monthly_cost
        const total_cost_annual = (12 * monthly_cost) + registration_cost

        var cost_object = {
            registration_cost: registration_cost, 
            monthly_cost: monthly_cost,
            total_cost: total_cost,
            total_cost_annual: total_cost_annual,
        }


        
        res.status(201).json({ cost_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.calculateGrantschild = async (req, res) => {
    try {
        const selectedchildcare = req.body.income
        console.log(req.body.income)
        const monthly_cost = selectedchildcare.cost_for_Singaporeans
        console.log(monthly_cost)

        const baby_bonus = await Grants.baby_bonus()
        // const kafs 
        // if (incomeOptions.value<) {
        // }= await Grants.kafs()

        const total_grants = baby_bonus

        var grant_object = {
            baby_bonus: baby_bonus, 
            total_grants: total_grants
        }

        res.status(201).json({ grant_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}