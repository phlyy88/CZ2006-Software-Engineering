const AuthenticationController = require('./controllers/Authenticationcontroller')

module.exports = (app) => {
    app.post('/login', (req, res) => {
        AuthenticationController.register
        })
    }
