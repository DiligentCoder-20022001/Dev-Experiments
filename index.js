var express = require('express');
var app = express();
app.set('view engine', 'ejs'); // this tells express to use ejs as our templating engine 
var port = process.env.port || 3000;
app.get('/', function(req, res){
    res.render("home");
});

app.get('/bye', function(req, res){
    res.render("bye");
});

app.listen(port, function(){
    console.log("server is running on port" + port);
});
