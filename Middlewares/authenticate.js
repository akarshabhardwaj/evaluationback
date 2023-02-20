const express = require('express');
const jwt=require("jsonwebtoken")


const authenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    try {
        jwt.verify(token, 'linked', function(err, decoded) {

           req.body.user=decoded.userId;
           if(decoded){
            next()
           }
           else
           {
            res.send({"msg":"Please Login"})
           }
          });
    } catch (error) {
        res.send({"msg":error.message})
    }
}

module.exports={
    authenticate
}