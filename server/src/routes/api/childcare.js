const express = require('express')
const mongodb = require('mongodb');

const router = express.Router();
//const childcareController = require("../controller/childcareController")
//const auth = require("../config/auth")


//Get childcare lisitngs
router.get('/', async (req, res) => {
    const childcare = await loadChildcareCollection;
    res.send(await childcare.find({}).toArray());
});


async function loadChildcareCollection () {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017', {
        useNewUrlParser: true
    });

    return client.db('childcareDB').collection('childcare');
}


// //MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
//     if(err) throw err;

//     //Write databse Insert/Update/Query code here..
               
// });



module.exports = router;