const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// Serve static files from the public library.
//app.use(express.static(path.join(__dirname, 'climate.html')));
app.get('/climate',function(response,request) {
    response.sendFile(path.join(__dirname, 'climate.html'));
})
app.listen(port,function(){
    console.log(`Example app listening on port http://localhost:${port}`);
});

/*
app.get('/',function(request,response){
    const q = url.parse(request.url,true);
    const fileName = '.'+q.pathname;
    fileserver.readFile(fileName,function(error,data){
        if(error){
            response.writeHead(404, {'Content-Type':'text/html'});
            return response.end('404 Page Not Found');
        }else {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
        }
    });
}); 
*/