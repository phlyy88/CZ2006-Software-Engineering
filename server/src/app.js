console.log('Starting backend...')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/db')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

// const User = require('./models/User') //import declared user schema
// const mongoose = require("mongoose")
// mongoose.Promise = global.Promise;
// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test', { useUnifiedTopology: true })
// .then(client => {
//     console.log('Connected to Database')
//     const users_db = client.db('users')
//     const users_coll = users_db.collection('users')

//     users_coll.find().toArray()
//             .then(results => {
//                 console.log(results)
//             })
// })
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.listen(process.env.PORT || 8081)
/* app.post('/register', (req, res) => {
    res.send({
        message: 'Hello ${req.body.email}, your user was registered.'
    })
}) */

const vehicleListing =  require('./routes')
app.use('/', vehicleListing)

/* MongoClient.connect('mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test', { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to Database')
    const users_db = client.db('users')
    const users_coll = users_db.collection('users')

    users_coll.find().toArray()
            .then(results => {
                console.log(results)
            })
        }) */

// const mongoose = require("mongoose");
// mongoose.set("useCreateIndex", true);
// mongoose
//     .connect(config.database, { useUnifiedTopology: true })
//     .then(() => {
//     console.log("Database is connected");
//     })
//     .catch(err => {
//     console.log({ database_error: err });
//     });
        

// GET /api/customers       get all customers
// GET /api/customers/1     get a specific customer of id 1
// PUT /api/customers/1     edit customer of id 1
// DELETE /api/customers/1  delete customer of id 1
// POST /api/customers      create all customers
