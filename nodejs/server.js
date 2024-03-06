var http = require('http'); // to access the http module.
// create server is a function available in a module called http.
http.createServer(function(request,response) { // createServer --> function, that will create a server for us.
    response.writeHead(200,{'Content-Type':'text/html'}) // when we get response then you need to send the status 200, 
// to get error - send the status 400, 404-file not found.
    response.write("Hello World!"); // to send the response back to the client.
    response.end(); // to indicate that our statement will be end. don't wait for excess statement
}).listen(8080); // we need to mention the port number.