var http = require('http');
var fs = require('fs');

var PORT = process.argv[2];
var FILEPATH = process.argv[3];

var server = http.createServer(function(req, res){
    var data = fs.createReadStream(FILEPATH);
    data.pipe(res);

});

server.listen(PORT);
