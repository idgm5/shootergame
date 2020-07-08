var express = require('express');
var http = require('http');
var app = express();

app.use(express.static('public'));
app.get('/', function(request, response){
    response.send('Game running');
});

var server = http.Server(app);

server.listen(process.env.PORT || 3000, function(){
   var host = server.address().address;
   var port = server.address().port;
   console.log('Listening on http://%s:%s', host, port);
});
