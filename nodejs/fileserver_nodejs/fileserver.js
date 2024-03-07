const http = require('node:http');
const url = require('url');
const fs = require('fs');
const port = 8080;
const hostname ='127.0.0.1'
http.createServer(function(request,response){
    const q = url.parse(request.url,true);
    const fileName = "."+q.pathname;
    fs.readFile(fileName, function(error,data){
        if(error) {
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end('404 Page Not Found'); 
        }else {
            response.writeHead(200,{'Content-type':'text/html'});
            response.write(data);
            response.end();
        }
    });
}).listen(port,hostname,function(){
    console.log(`File Server Running at http://${hostname}:${port}/`);
});