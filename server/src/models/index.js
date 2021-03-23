const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
const cors = require('cors')
const { default: router } = require('../../../client/src/router')
const router = express.Router()
const app = express()
app.use

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

router.get('/', (req,res) => {
    const posts = await loadPostsCollection()
    res.send(await posts.find({}).toArray())
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mogodb://localhost:27017/vuejs.vuejs')
    

    return client.db('vue_express').collection('posts')
}

fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
        )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = routers


