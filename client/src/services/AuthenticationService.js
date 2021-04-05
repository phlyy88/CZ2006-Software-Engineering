import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('favourite', credentials)
    }
}

// AuthenticationService.register({
//     email:'testing@gmail.com',
//     password: '123456'
// })