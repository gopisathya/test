(function(){
	'use strict';

	var express=require('express');
	var app=express();
	var router=express.Router();
	var server = require('http').Server(app);
	var mongojs=require('mongojs');
	var path=require('path');
	var bodyParser=require('body-parser');
	var session = require('express-session');
	var port = Number(process.env.PORT || 3000 );

	app.use('/', express.static(__dirname+'/public'));




app.use(require(path.join(__dirname+'/public/NodeJS/server/authServer.js')));

	server.listen(port,'0.0.0.0',function(){ 
	  console.log("Listen on port::"+port); 
	})
		
	module.exports=router;

})();

