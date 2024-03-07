const express = require('express'); // to get express
const app = express(); // to start express
const port = 3000; 
app.get('/',function(request,response){ // get --> router 
    response.send('Welcome to ExpressJs'); // response --> data from server to client.
});
app.listen(port,function(){ // to satrt the server.
    console.log(`Example app listening on port http://localhost${port}`);
})