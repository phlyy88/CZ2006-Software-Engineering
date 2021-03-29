const HDB = require('../models/HDB')

exports.getHDBDetails = async (req, res) => {
    HDB.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving HDB info"
            })
        })
}