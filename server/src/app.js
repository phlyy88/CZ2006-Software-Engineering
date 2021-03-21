console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* app.post('/register', (req, res) => {
    res.send({
        message: 'Hello ${req.body.email}, your user was registered.'
    })
}) */
const vehicleListing =  require('routes')
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


app.listen(config.port)
