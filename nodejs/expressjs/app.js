const express = require('express');
const app = express();
const port = 8080;
app.set('view engine','pug');
app.set('views','./pugjs');
app.get('/',(request,response)=>{
    response.render('index');
});
app.listen(port,()=> {
    console.log(`Pug Server is running at http://localohost${port}`);
});