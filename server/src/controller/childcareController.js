const MongoClient = require('mongodb').MongoClient

//const url = 'mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test'
//const client = await MongoClient.connect(url , { useUnifiedTopology: true })

module.exports = {
    //Function to get the vehicle collection to run methods on it
    async loadChildcareFeesCollection(){
    /**
     * 
     * @returns database collection of childcares
     */
    /**async loadChildcareFeesCollection(){
        return client.db('childcareDB').collection('childcare')
    },*/

    /** 
     * Function that filters childcare based on criteria selected by user
     * @param {*} childcare_organization Name of childcare centre
     * @param {*} type Whether childcare is private/government
     * @param {*} level Whether child is in nursery/pre-nursery
     * @param {*} day Whether parent is looking for full-time/half-day nurseries
     * @param {*} less_than Cost of childcare less than value
     * @param {*} more_than Cost of childcare more than value
     * @returns {result} List of filtered listings
     */
    async filterChildcare(childcare_organization, type, level, day, 
        less_than, more_than){
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