const express = require('express');
const bcrypt = require('bcrypt');
const{UserModel}=require("../models/user.model")
const jwt=require("jsonwebtoken")


const UserRoute=express.Router()

UserRoute.post("/register",async (req,res)=>{
   const{name,email,gender,password,age,city}=req.body
try {
    const isalready=await UserModel.findOne({email})
    if(isalready){
        res.send({"msg":"Already registered please login"})
    }
    else
    {
        bcrypt.hash(password, 5, async (err, hash)=> {
           if(err){
            res.send({"msg":"Please enter valid details"})
           }
           else
           {
            const newuser=new UserModel({name,email,gender,password:hash,age,city})
            newuser.save()
            res.send({"msg":"Successfully Registered"})
           }
        });
    }


} catch (error) {
    res.send({"msg":error.message})
}

})


UserRoute.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, async(err, result)=> {
               if(result===true)
               {
                const token = jwt.sign({ userId: user[0]._id }, 'linked');
                res.send({"msg":"Login Successful","token":token})
               }
               else
               {
                res.send({"msg":"Enter Correct Password"})
               }
            });
        }
        else
        {
            res.send({"msg":"Enter Correct Email or Register First"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={UserRoute}