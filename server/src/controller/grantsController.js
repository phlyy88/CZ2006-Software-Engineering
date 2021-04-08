const Grants = require('../models/Grants')

exports.getGrantsDetails = async (req, res) => {
    Grants.find()
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

