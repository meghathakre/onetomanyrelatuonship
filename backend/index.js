const express = require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const bookRoute= require("./routes/bookRoute");
require("dotenv").config();
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Connected Succesfully!");
})



const port=process.env.PORT || 3000
app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/books", bookRoute);


app.listen(port, ()=>{
    console.log(`server run on ${port}!!!`);
})