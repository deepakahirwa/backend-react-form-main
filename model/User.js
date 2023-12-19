import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    phone : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    batch : {
        type : String,
        required : true
    },
    payment :{
        type : Boolean,
        default : false
    }
}, {timestamps : true});

export default mongoose.model('User', UserSchema);