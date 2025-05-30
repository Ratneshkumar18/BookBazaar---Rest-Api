import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requied : true,
        minLength:3,
        maxLength: 25
    },
    lastName:{
        type:String,
        minLength:3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        trim:true,
    },
    password: {
        type: String,
        requied: true
    },
    role: {
       type:String,
       enum: ['user', 'admin'],
       default: 'user'
    },

    isVerified: {
        type: Boolean,
        default:false,
    },
    verificationToken: {
        type: String
    }

}, {
    timestamps:true,
});

const user = mongoose.model('user', userSchema);

export default user

