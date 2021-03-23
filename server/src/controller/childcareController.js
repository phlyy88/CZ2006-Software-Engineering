const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
const client = await MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    //Function to get the vehicle collection to run methods on it
    async loadChildcareFeesCollection(){
        return client.db('childcareDB').collection('childcare')
    },

    async filterChildcare(childcare_organization, type, level, day, 
        less_than, more_than, child_age){
            const childcare = await loadchildcareCollection()
            const result = childcare.find(
                {
                    "childcare_organization": {$eq: childcare_organization},
                    "type": {$eq: type},
                    "level": {$eq: level},
                    "day": {$eq: /.*day.*/i},
                    "less_than": {$lte: less_than},
                    "more_than": {$gte: more_than},
                    "child_age": {$eq: level}
                }).toArray()
                return result
        }
}