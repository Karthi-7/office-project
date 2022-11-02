const express=require("express");
var bodyParser = require('body-parser')
const port=3000;
const app=express();
const multer  = require('multer')
const userRoutes=require('./routes/user.routes')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/backendtest');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
userRoutes(app);

app.listen(port,()=>{
    console.log("listening to the port",port)
})

