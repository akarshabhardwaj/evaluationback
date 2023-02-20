const express = require('express');
require("dotenv").config()
const{connection}=require("./db")
const{UserRoute}=require("./Routes/user.route")
const{PostRoute}=require("./Routes/post.route")
const{authenticate}=require("./Middlewares/authenticate")
const cors = require('cors');


const app=express()
app.use(cors())

app.use(express.json())


app.use("/users",UserRoute)
app.use(authenticate)
app.use("/posts",PostRoute)

app.listen(process.env.PORT,async ()=>{
    try {
        await connection;
        console.log("Connected to Database")
    } catch (error) {
        console.log(error)
    }
    console.log("server is 8080")
})