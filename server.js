#!/usr/bin/env nodejs
var http = require('http');
var httpdispatcher = require ('httpdispatcher');
var dispatcher = new httpdispatcher();


const PORT = 8080;

//THis is a comment maaaaannnn
// THIS IS A SECOND COMMENT
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
    res.end('<h1>Hey, this is the homepage of your Updated Server4</h1>');
});

dispatcher.onGet("/welcome", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome homepage for Updated Server');
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist");
});


myFirstServer.listen(PORT, function(){

    console.log("Update Server listening on: http://localhost:%s", PORT);
});

