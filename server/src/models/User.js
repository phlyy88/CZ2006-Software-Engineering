const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    dob: {
        type: String
    },
    income: {
        type: Number
    },
    // plans: {
    //     plan1: {
    //         housing: {
    //             type: Array
    //         },
    //         vehicle: {
    //             type: Array
    //         },
    //         childcare :{
    //             type: Array
    //         }
    //     },
    //     plan2: {
    //         housing: {
    //             type: Array
    //         },
    //         vehicle: {
    //             type: Array
    //         },
    //         childcare :{
    //             type: Array
    //         }
    //     },
    //     plan3: {
    //         housing: {
    //             type: Array
    //         },
    //         vehicle: {
    //             type: Array
    //         },
    //         childcare :{
    //             type: Array
    //         }
    //     }
    // },
    v1: {type: Array},
    v2: {type: Array},
    v3: {type: Array},
    // h1: {type: Array},
    // h2: {type: Array},
    // h3: {type: Array},
    // c1: {type: Array},
    // c2: {type: Array},
    // c3: {type: Array},
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {
    const user = this
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
  
//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
    "secret")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
  
//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    
    if (!user) {
        throw new Error({ error: "Invalid login details" })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: "Invalid login details" })
    }
    
    return user
}

userSchema.statics.findByEmail = async (email) => {
    //console.log(req.body.email)
    try {
    const user = await User.findOne({email}, 
    function(err){
        if (err){
          console.log(err);}
        } )
    console.log("Found by email")
    return user
    } catch(error) {
        console.log(error)
    }
}

userSchema.statics.editProfile = async (req) => {
    const filter = { email: req.email }
    await User.updateOne(filter,
        {
            firstName: req.firstName,
            lastName: req.lastName,
            gender: req.gender,
            dob: req.dob
        })
}

userSchema.statics.updatePlan = async (req) => {
    console.log("Before update")
    console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.v1)
    try {
        User.findOneAndUpdate(
        {"email":req.body.email},
        {$set:{
            "v1": req.body.v1, 
            "v2": req.body.v2,
            "v3": req.body.v3,
            }},
        {new: true}, function(err){
            if (err){
              console.log(err);
            } } )
        console.log("Update complete") 
    } catch(error) {
        console.log(error)
    }
}

const User = mongoose.model("User", userSchema, "user") //create model

module.exports = User
