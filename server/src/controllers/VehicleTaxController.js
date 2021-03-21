const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = await MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    async loadVehicleTaxCollection(){
        const tax = client.db('Tax').collection('Tax')
        const vehicleTax = tax.find(
            {
                "type": {$eq: "vehicle"}
            }
        )

        return vehicleTax
    },
    
    async loadCOECollection(){
        const coe = client.db('tax').collection('coe')

        return coe.find({}).toArray()
    }

    //Define Tax Calculation functions
}