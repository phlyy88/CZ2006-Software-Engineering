console.log('Starting backend...')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// GET /api/customers       get all customers
// GET /api/customers/1     get a specific customer of id 1
// PUT /api/customers/1     edit customer of id 1
// DELETE /api/customers/1  delete customer of id 1
// POST /api/customers      create all customers

MongoClient.connect('mongodb+srv://GQ:cz2006trial@cluster0.pbint.mongodb.net/test', { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to Database')
    const users_db = client.db('users')
    const users_coll = users_db.collection('users')

    users_coll.find().toArray()
            .then(results => {
                console.log(results)
            })

    // app.get('/', () => {
    //     users_coll.find().toArray()
    //         .then(results => {
    //             console.log(results)
    //         })
    //         .catch(error => console.error(error))
    // })
})

app.post('/register', (req, res) => {
    console.log(req.body.email)
    res.send({
        message: 'Hello ur user was registered'
    })
})

app.listen(process.env.PORT || 8080)
