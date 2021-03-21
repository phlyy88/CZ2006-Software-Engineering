const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = new MongoClient(url , { useUnifiedTopology: true })

client.connenct(
    function calculate(type){
        const tax_db = client.db('tax')
        const tax_coll = tax_db.collection('tax')
        tax_coll.find(
            {
                "type":{$eq: type}
            }
        )
    }
)