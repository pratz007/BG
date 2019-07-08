#!/usr/bin/env nodejs
var http = require('http');
var httpdispatcher = require ('httpdispatcher');
var dispatcher = new httpdispatcher();
require('dotenv').config();
const name=process.env.Name
const PORT = 5000;

function handleRequest(request, response){
    try {
        
        console.log(request.url);
        
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var myFirstServer = http.createServer(handleRequest);
dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello PRATEEK </h1>'+name);
    console.log("HERROOO "+name)
    console.log ("TEST")
});

dispatcher.onGet("/welcome", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome homepage for Updated Server');
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist + TEST 5");
});


myFirstServer.listen(PORT, function(){

    console.log("Update Server listening on: http://localhost:%s", PORT);
});

