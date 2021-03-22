console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/login', (req, res) => {
    res.send({
        message: 'your user was registered.'
    })
})

app.listen(process.env.PORT || 8080)
app.get('/planner', (req,res) => {
    res.send({
        message: "Overall planning page"
    })
})

app.post('/favourite', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your items have been saved!`
    })
})

//app.listen(process.env.PORT || 8081)
