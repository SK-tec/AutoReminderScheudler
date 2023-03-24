const express = require("express");
const cors = require("cors");
require("dotenv/config");

const connectDB=require("./config/db");
const { connect } = require("mongoose");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("<h1>Welcome</h1>")
})
connectDB().then(()=>{app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)})})
