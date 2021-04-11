const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send({
        message: "Handling GET request to /plans"
    })
})

router.post('/test', (req, res) => {
    res.send({
        message: "Handling POST request to /plans"
    })
})

router.get('/:planID', (req, res) => {
    const id = req.params.planID
    res.status(200).json({
        message: "This is plan " + id
    })
})

module.exports = router