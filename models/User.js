const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    country:{
        type:String,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    bank_acc:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);