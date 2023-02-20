const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
gender:{type:String,required:true},
password:{type:String,required:true},
age:{type:Number,required:true},
city:{type:String,required:true}
})
/*
name ==> String
email ==> String
gender ==> String
password ==> String
age ==> Number
city ==> String
*/

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}