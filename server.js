var express = require('express');
var server = express()

server.listen(process.env.PORT || 3000, function(){
   var host = server.address().address;
   var port = server.address().port;
   console.log('Listening on http://%s:%s', host, port);
});
