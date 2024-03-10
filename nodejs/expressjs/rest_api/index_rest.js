const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({
    extended:true // by default we will set to true.
}));

app.get('/', function(request,response){
    response.sendFile(__dirname + "/index_rest.html");
});

/* app.post("/addUser", function(request,response){
    var username = request.body.username;
    var dob = request.body.dob;
    var profession = request.body.profession;
    var obj = {};
    var key = request.body.userid;
    var newuser = {
        'name' : username,
        'dob' : dob,
        'profession' : profession,
    }
    obj[key] = newuser ;

    fs.readFile("index_rest.json","utf-8",function(error,data){
       /* data = JSON.parse(data);
        data[key] = obj[key];
        console.log(data);
        var updateuser = JSON.stringify(data);
        
        if (error) {
            // Handle file read error
            console.error("Error reading file:", error);
            response.status(500).send("Internal Server Error");
            return;
        }

        try {
            data = data ? JSON.parse(data) : {}; // If file is empty, initialize as empty object
            data[key] = obj[key];

        fs.writeFile("index_rest.json",updateuser,function(err){
           // response.end(JSON.stringify(data));
           if (err) {
            // Handle file write error
            console.error("Error writing file:", err);
            response.status(500).send("Internal Server Error");
            return;
        }
        
        console.log("Data added successfully:", data);
        response.end(JSON.stringify(data));
    });
} catch (parseError) {
    // Handle JSON parsing error
    console.error("Error parsing JSON:", parseError);
    response.status(500).send("Internal Server Error");
    return;
}
        });
    });

app.listen(3000,function(){
    console.log(`The Server is running on port http://localhost:3000`);
})
*/

app.post("/addUser", function(request,response){
    var username = request.body.username;
    var dob = request.body.dob;
    var profession = request.body.profession;
    var obj = {};
    var key = request.body.userid;
    var newuser = {
        'name' : username,
        'dob' : dob,
        'profession' : profession,
    }
    obj[key] = newuser ;

    fs.readFile("index_rest.json","utf-8",function(error,data){
        if (error) {
            // Handle file read error
            console.error("Error reading file:", error);
            response.status(500).send("Internal Server Error");
            return;
        }

        try {
            data = data ? JSON.parse(data) : {}; // If file is empty, initialize as empty object
            data[key] = obj[key];

            fs.writeFile("index_rest.json", JSON.stringify(data), function(err){
                if (err) {
                    // Handle file write error
                    console.error("Error writing file:", err);
                    response.status(500).send("Internal Server Error");
                    return;
                }
                
                console.log("Data added successfully:", data);
                response.end(JSON.stringify(data));
            });
        } catch (parseError) {
            // Handle JSON parsing error
            console.error("Error parsing JSON:", parseError);
            response.status(500).send("Internal Server Error");
            return;
        }
    });
});
app.post("/particularUser",function(request,response){
    fs.readFile("index_rest.json","utf-8",function(error,data){
        var users = JSON.parse(data);
        var user = users[request.body.userid];
        console.log(user);
        response.end(JSON.stringify(user));
    });
});
app.post("/deleteUser",function(request,response){
    fs.readFile("index_rest.json","utf-8",function(error,data){
        data = JSON.parse(data);
        delete data[request.body.userid];
        console.log(data);
        var updateuser = JSON.stringify(data);
        fs.writeFile("index_rest.json",updateuser,function(err){
            response.end(JSON.stringify(data));
        });
        // response.end(JSON.stringify(data));
    });
});
app.listen(3000,function(){
    console.log(`The server is running on port http://localhost:3000`);
});

