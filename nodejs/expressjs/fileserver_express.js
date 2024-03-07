const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/climate', function(request,response) {
    response.sendFile(path.join(__dirname,'fileserver_expressjs','public', 'climate.html'));
});
app.get('/games',(request,response) => {
    response.sendFile(path.join(__dirname, 'fileserver_expressjs','public','games.html'));
});
app.listen(port,function(){
    console.log(`Example app listening on port http://localhost:${port}`);
});
