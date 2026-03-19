const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const User=require('./userModel');
const userRoute=require("./userroutes");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../Frontend"))
mongoose.connect("mongodb://localhost:27017/user")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

app.use("/api/users",userRoute);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})