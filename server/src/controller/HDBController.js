const HDB = require('../models/HDB')

exports.getChildcareDetails = async (req, res) => {
    HDB.find()
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