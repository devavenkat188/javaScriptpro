const express = require('express'); // to access the express
const path = require('path');
const app = express(); // to start the express
const port = 3000;

app.get('/climate', function(request,response) { // to access the required file.
    response.sendFile(path.join(__dirname,'fileserver_expressjs','public', 'climate.html')); // specify the path,
}); // note --> HTML, CSS file will be available under the public folder.
app.get('/games',(request,response) => { // to acccess the router to change the file.
    response.sendFile(path.join(__dirname, 'fileserver_expressjs','public','games.html'));
});
app.listen(port,function(){
    console.log(`Example app listening on port http://localhost:${port}`);
});
