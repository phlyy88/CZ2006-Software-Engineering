const express = require('express')
const MongoClient = require('mongodb').MongoClient

const router = express.Router()

//Get data
router.get("/", async(req, res) => {
    const vehicle = await loadVehicleCollection()
    res.send(vehicle.find({}).toArray())
})

//Filter Data
router.get("/", async(req, res) => {
    const filterResult = await filterVehicle()
    res.send(filterResult)
})

//Function to get the vehicle collection to run methods on it
async function loadVehicleCollection(){
    const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
    const client = await MongoClient.connect(url , { useUnifiedTopology: true })

    return client.db('vehicles').collection('vehicles')
}

async function filterVehicle(category, passenger_capacity, min_engine_capacity, 
    max_enginer_capacity, min_omv, max_omv){
        const vehicle = await loadVehicleCollection()
        const result = vehicle.find(
            {
                "category": {$eq: category},
                "passenger_capacity": {$eq: passenger_capacity},
                "engine_capacity": {$lte: max_enginer_capacity, $gte: min_engine_capacity},
                "omv": {$lte: max_omv, $gte: max_omv}
            }).toArray()
            return result
    }

module.exports = router;












/* const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = new MongoClient(url , { useUnifiedTopology: true })

client.connect( 
    function filter(category, passenger_capacity, min_engine_capacity, 
        max_enginer_capacity, min_omv, max_omv) {
            const vehicle_db = client.db('vehicles')
            const vehicle_coll = vehicle_db.collection('vehicles')
            vehicle_coll.find(
            {
                "category": {$eq: category},
                "passenger_capacity": {$eq: passenger_capacity},
                "engine_capacity": {$lte: max_enginer_capacity, $gte: min_engine_capacity},
                "omv": {$lte: max_omv, $gte: max_omv}
            }
    )

},
    function display(){
        const vehicle_db = client.db('vehicles')
            const vehicle_coll = vehicle_db.collection('vehicles')
            vehicle_coll.find().toArray().then(
                result => console.log(result)
                )
    }
) */