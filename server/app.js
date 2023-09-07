var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'view/index.html'));
});

app.get('/pagina1',function(req,res){
    res.send("<h1> ciaobello MONO<h1>");  //aggingere pagina uno in fondo
})

app.listen(3000,function(){
    console.log("Server attivo sulla 3000");
})