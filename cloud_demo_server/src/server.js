
const path = require('path');
const express = require('express');
require("./helpers/demo_base")
let DataModel = require('./services/getdata');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//cors is nothing but the cross origin Resource sharing
const cors = require('cors');
const { request } = require('http');
const app = express();


app.use(bodyParser.json());

app.use(cors());

allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

//middle ware 

// this will enable t access the request from every where from the origin.
app.use(allowCrossDomain);

app.get('/getdataList', async (req,res,next)=>{
        await DataModel.find({}).then((data)=>{
          res.send(data)
        }).catch((err)=>{
          res.send("failure");
    })
})

app.post("/add_data",async (req,res, next) => {

  requestBody = req.body
  id = requestBody.id;
  title = requestBody.title;
  price = requestBody.price;
  description = requestBody.description;
  category = requestBody.category;
  image = requestBody.image;
  rating = requestBody.rating;

  const product = new DataModel({
    id : id,
    title:title,
    price:price,
    description:description,
    category:category,
    image:image,
    rating:rating

  })

  try{
    const inserted = await product.save()
  if(inserted){
      res.status(201).json({
        "message" :"created"
      })
  }else{

  }
  }catch(e){
    res.status(500).json({
      "message" :"Failed"
    })
  }
  
})


app.post("/multiple_data",async (req,res, next) => {

  requestBodyList = req.body
 for(requestBody of requestBodyList){
  id = requestBody.id;
  title = requestBody.title;
  price = requestBody.price;
  description = requestBody.description;
  category = requestBody.category;
  image = requestBody.image;
  rating = requestBody.rating;
  
  const product = new DataModel({
    id : id,
    title:title,
    price:price,
    description:description,
    category:category,
    image:image,
    rating:rating

  })

  try{
    const inserted = await product.save()
  }catch(e){
    res.status(500).json({
      "message" :"Failed"
    })
  }
 
 }
  
 res.status(200).json({
  "msg" : "all data inserted"
 })
  
})



app.listen(3000, ()=>{
  console.log(`Demo server is running on port : 3000`);
})