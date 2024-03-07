
const express = require('express'); // to get express
const app = express(); // to start the express
app.get('/',function(request,response){ // get --> router & '/' --> URL indication.
    response.send('Hello World'); // response --> data from server to client. & request --> data from client to server.
})
// four methods - get, post, put & delete.
app.listen(9000, function(request,response){  // to start the server.
        console.log('Running...') // to check wether the server is running / not.
}); 
