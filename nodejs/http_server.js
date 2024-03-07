const http = require('node:http'); // access http from module.
let hostname = '127.0.0.1'; // server name
let port = 3000; // port number

const server = http.createServer(function(request,response){ // create the server
    response.statusCode = 200; // status code - to get the response
    response.setHeader('Content-Type', 'text/plain'); // to metion the header with the content-type
    response.write('Welcome to NodeJS\n'); // to send the response back to the client.
    response.end(); // to indicate our response will end.
});server.listen(port,hostname,function() { // mention the port number & servername with one empty function.
    console.log(`Server running at http://${hostname}:${port}/`);
});