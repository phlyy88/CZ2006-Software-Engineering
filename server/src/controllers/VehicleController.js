const MongoClient = require('mongodb').MongoClient
//const Vechicle = require('./models/Vehicle')

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    //Function to get the vehicle collection to run methods on it
    /**
     * 
     * @returns vehicle
     */
    async loadVehicleCollection(){
        const vehicle = client.db('vehicles').collection('vehicles')
        return vehicle
    },
    
    /**
     * 
     * @param {*} category 
     * @param {*} passenger_capacity 
     * @param {*} min_engine_capacity 
     * @param {*} max_engine_capacity 
     * @param {*} min_omv 
     * @param {*} max_omv 
     * @returns result 
     */
    
    async filterVehicle(category, passenger_capacity, min_engine_capacity, 
        max_engine_capacity, min_omv, max_omv){
            const vehicle = await this.loadVehicleCollection()
            const result = vehicle.find(
                {
                    "category": {$eq: category},
                    "passenger_capacity": {$eq: passenger_capacity},
                    "engine_capacity": {$lte: max_engine_capacity, $gte: min_engine_capacity},
                    "omv": {$lte: max_omv, $gte: min_omv}
                }).toArray()
                return result
        }

}