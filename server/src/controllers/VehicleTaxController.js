const MongoClient = require('mongodb').MongoClient
//const VechicleTax = require('./models/Tax')
//const COE = require('./models/Coe')

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    /**
     * 
     * @returns vehicleTax
     */
    async loadVehicleTaxCollection(){
        const tax = client.db('Tax').collection('Tax')
        const vehicleTax = tax.find(
            {
                "type": {$eq: "vehicle"}
            }
        )

        return vehicleTax
    },
    
    /**
     * 
     * @returns coe
     */
    async loadCOECollection(){
        const coe = client.db('tax').collection('coe')

        return coe.find({}).toArray()
    }

    //Define Tax Calculation functions
}