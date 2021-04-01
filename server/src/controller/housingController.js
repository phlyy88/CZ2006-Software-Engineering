const Housing = require('../models/Housing')

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