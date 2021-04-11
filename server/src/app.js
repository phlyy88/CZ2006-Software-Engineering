const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const cors = require("cors");
const config = require("./config/db.config")

const app = express();

app.use(cors())
app.use(morgan('combined'))
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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

const userRoutes = require('./routes/user')
app.use('/api/user', userRoutes)
const childcareRoutes = require('./routes/childcare')
app.use('/api/childcare', childcareRoutes)
const vehicleRoutes = require('./routes/vehicle')
app.use('/api/vehicle', vehicleRoutes)
const housingRoutes = require('./routes/housing')
app.use('/api/housing', housingRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});