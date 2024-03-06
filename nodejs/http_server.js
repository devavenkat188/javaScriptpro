const http = require('node:http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(request,response){
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.write('Welcome to NodeJS\n');
    response.end();
});
server.listen(function(port,hostName){
    console.log(`Server running at http://${hostName}:${port}/`);
});