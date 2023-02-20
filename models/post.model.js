const mongoose = require('mongoose');


const postschema=mongoose.Schema({
    title:{type:String,required:true},
body :{type:String,required:true},
device :{type:String,required:true},
no_of_comments :{type:Number,required:true},
user:String
})

const PostModel=mongoose.model("Post",postschema)

module.exports={PostModel}