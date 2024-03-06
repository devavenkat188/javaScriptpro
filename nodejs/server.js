var http = require('http'); 

http.createServer(function(request,response) {
    response.write("Hello World!"); // to send back to the client.
    response.end();
}).listen(8080);