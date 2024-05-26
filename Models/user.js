const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,

    },
    firstName:{
        type: String ,
        required: true,

    },
    lastName:{
        type: String,

    },
    email:{
        type:String,
        required: true,
        unique: true,

    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    },
    
});

const User= mongoose.model("user", userSchema);

module.exports = User;