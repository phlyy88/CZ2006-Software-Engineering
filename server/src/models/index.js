const dbConfig = require("../config/db.config.js")

const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.users = require("./User")(mongoose)
db.childcare = require("./Childcare")(mongoose)
db.vehicle = require("./Vehicle")(mongoose)
db.housing = require("./Housing")(mongoose)
db.tax = require("./Tax")(mongoose)
db.grants = require("./Grants")(mongoose)

module.exports = db