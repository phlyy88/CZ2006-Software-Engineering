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
        const registration_cost = selectedchildcare.registration_fee
        const monthly_cost = selectedchildcare.cost_for_Singaporeans
        const numberOfChildren = selectedchildcare.child
        const total_cost = ((12 * monthly_cost) + registration_cost) * numberOfChildren 

        var cost_object = {
            registration_cost: registration_cost, 
            monthly_cost: monthly_cost,
            total_cost: total_cost
        }


        
        res.status(201).json({ cost_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.calculateGrantschild = async (req, res) => {
    try {
        const child = req.body.child

        var baby_bonus
        if (child==1){
            baby_bonus= await Grants.baby_bonus_1()}
        else if (child==2){baby_bonus=await Grants.baby_bonus_2()}
        else {baby_bonus=await Grants.baby_bonus_3()}

        var baby_bonus_step
        baby_bonus_step = child * await Grants.baby_bonus_step()

        const total_grants = baby_bonus + baby_bonus_step

        var grants_object = {
            baby_bonus: baby_bonus, 
            baby_bonus_step: baby_bonus_step,
            total_grants: total_grants
        }

        res.status(201).json({ grants_object })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}