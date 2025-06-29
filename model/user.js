//this is the mongodb schema for user schema 
schema for mongodb
const mongoose=require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})


const userModel= mongoose.model('User',userSchema)
//export the usermodel 
module.exports=userModel

