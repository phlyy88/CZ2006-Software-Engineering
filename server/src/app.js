console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.post('/login', (req, res) => {
//     res.send({
//         message: 'your user was registered.'
//     })
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
  
//Childcare middleware
const childcare = require('./routes/api/childcare');

app.use('api/childcareListing', childcare);
//domain: api/childcareListing

app.listen(process.env.PORT || 8080)