const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = await MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    //Function to get the vehicle collection to run methods on it
    async loadVehicleCollection(){
        return client.db('vehicles').collection('vehicles')
    },

    async filterVehicle(category, passenger_capacity, min_engine_capacity, 
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
}