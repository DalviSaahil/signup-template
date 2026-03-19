// Import Express framework (used to create server)
const express = require("express");

// Import Mongoose (used to connect Node.js with MongoDB)
const mongoose = require("mongoose");

// Import body-parser (used to read JSON data from request body)
const bodyParser = require("body-parser");

// Import CORS (allows frontend to connect to backend)
const cors = require("cors");

// Import User model (MongoDB schema file)
const User = require("./models/usermodel");
const userRoutes = require("./routes/userroute");

// Create Express application
const app = express()
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../Frontend"));
//connect to mongodb
mongoose.connect("mongodb://localhost:27017/user")
.then(()=> console.log("mongodbconnected"))
.catch(err=>console.log(err))

// Routes
// app.use("/api/users", userRoutes);
app.use("/api", userRoutes); 


app.listen(5000, () => {
  console.log("Server running on port 5000");
});