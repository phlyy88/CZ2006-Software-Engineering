import Api from '@/services/Api'

export default {
    /**
     * 
     * @param {*} credentials 
     * @returns 
     */
    register (credentials) {
        return Api().post('favourite', credentials)
    }
}

// Call method like this in other files
// AuthenticationServices.register({
//     email: "",
//     password: ""
// })

