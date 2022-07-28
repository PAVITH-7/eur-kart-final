var mongoose = require('mongoose');
var mongooseConn = require("../helpers/demo_base");
const Schema = mongoose.Schema;

var MySchema = mongoose.model('products',{
id:Number,
title:String,
price:Number,
description:String,
category:String,
image: String,
rating: {rate:Number, count: Number}
})


module.exports = MySchema;