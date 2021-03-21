import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// can call this method via:
// AuthenticationSerivce.register({
//     email: 'testing@gmail.com',
//     password: '12345'
// })