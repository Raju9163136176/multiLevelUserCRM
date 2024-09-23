//Schema for the user that will represent the model of the data

import mongoose from 'mongoose '

const userSchema = new mongoose.Schema(
    {
        name:{
        type: String,
        required: true,
        min:2,
        max:100,
        },
        email:{
            type: String,
            required: true,
            min:2,
            unique:true,
        },
        password:{
            type: String,
            required: true,
            min:5
        },
        comapnyName:{
            type: String,
            required: true,
            min:5
        },
        
        State:{
            type: String,
            required: true
        },
        
        city:{
            type: String,
            required: true
        },
        
        country:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ["superagent","agent","counsellor","superadmin","admin","processor"]
        },
    },
    {timestamps: true}
)

const User = mongoose.model("User",userSchema)
export default User;