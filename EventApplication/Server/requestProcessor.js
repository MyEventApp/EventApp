var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var func = require('./src/profileData');

app.use(bodyparser.text({limit:'100mb'}));
app.use(bodyparser.urlencoded({limit:'100mb',extended:true}));
app.use('/', express.static(__dirname));
app.use(bodyparser.json());


app.get('/eventProfile',function(req,result){
console.log("coming inside eventProfile API",req.body);
let ClientData = req.body;
   func(ClientData, function (res) {
     console.log(res);
         result.send(res);

  });



});

app.listen(5050);
console.log("Server listening");
