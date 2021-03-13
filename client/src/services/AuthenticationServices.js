import Api from '@/services/Api'

export default{
    // create object with method
    register(credentials) {
        //Pass object into post method of axios which uses credentials
        return Api().post('register', credentials)
        // Post whatever object passed into function 
    }
}

// Call method like this in other files
// AuthenticationServices.register({
//     email: "",
//     password: ""
// })

