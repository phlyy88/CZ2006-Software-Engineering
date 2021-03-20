console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

mongoose.connect('mongodb://localhost:27017/vuejs.vuejs', function()
     {console.log('connection has been made');})

app.post('/login', (req, res) => {
    res.send({
        message: 'your user was registered.'
    })
})

app.listen(process.env.PORT || 8080)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })