const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("<h1>Welcome</h1>")
})

app.listen(PORT,()=>
{
  console.log(`Server is running on the Port ${PORT}`)})