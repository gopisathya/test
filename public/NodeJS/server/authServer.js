var express=require('express');
var router=express.Router();
var path=require('path');
var bodyPaser=require('body-parser');
var http = require('http');
var mongojs=require('mongojs');
var session = require('express-session');










router.use(session({
    secret: 'Gopinath',
    resave: false,
    saveUninitialized: true ,
    httpOnly: true,
    secure: true,
     
})); 
function IsAuthenticated(req,res,next)
{   
   sess=req.session;
  if(req.session.Authenticated)
    return next();
  res.status(401).send("unauthorized access");
}

module.exports=router;
