const express = require("express");
const cors = require("cors");
require("dotenv/config");

const connectDB=require("./config/db");
const { connect } = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());




if(process.env.NODE_ENV==="production"){
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });

}


connectDB().then(()=>{app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)})})
