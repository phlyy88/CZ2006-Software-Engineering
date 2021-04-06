const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const cors = require("cors");
const config = require("./config/db.config")

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

app.use(cors())
app.use(morgan('combined'))
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// const db = require("./models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

const planRoutes = require('./routes/plans')
app.use('/plans', planRoutes)

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
  .connect(config.url, { useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

const childcareRoutes = require('./routes/childcare')
app.use('/api/childcare', childcareRoutes)
const vehicleRoutes = require('./routes/vehicle')
app.use('/api/vehicle', vehicleRoutes)
const housingRoutes = require('./routes/housing')
app.use('/api/housing', housingRoutes)

// require('./routes/user')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});