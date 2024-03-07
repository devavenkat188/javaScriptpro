
const express = require('express'); // to get express
const app = express(); // to start the express
app.get('/',function(request,response){ // get --> router & '/' --> URL indication.
    response.send('Hello World'); // response --> data from server to client. & request --> data from client to server.
});
app.get('/people',function(request,response){ // to activate different request by using router.
    response.send('Welcome for Express Js learning');
});
// four methods - get, post, put & delete.
app.get('/people/:id',function(request,response){ // to set dynamic URL based on user input.
    const id = request.params.id; // to get data from client to server.
    if(id == 1){
        response.send('Deva'+id);
    }else if(id == 2) {
        response.send('Arun'+id);
    }else if(id == 3){
        response.send('Sanjay'+id);
    }else {
        response.send('Happy Learning'+id);
    }
});
app.listen(9000, function(request,response){  // to start the server.
        console.log('Running...') // to check wether the server is running / not.
}); 
