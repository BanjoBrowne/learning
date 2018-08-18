console.log("Server is starting")

var express = require('express')
var app = express()
var server = app.listen(3000, listening);

function listening(){
  console.log("Server Started, Ready to go.")
}

app.use(express.static('website'));


// use command "node server.js"