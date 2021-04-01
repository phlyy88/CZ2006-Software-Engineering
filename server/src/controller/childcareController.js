const Childcare = require('../models/Childcare')

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