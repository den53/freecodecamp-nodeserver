var http = require('http');
var url = require('url');

var PORT = process.argv[2];

var server = http.createServer(function(req, res){
    var data = url.parse(req.url, true);
    var dateString = data.query.iso;
    var date = new Date(dateString);
    var result = {};
    if(req.method ==='GET' && data.pathname === '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
        var resultString = JSON.stringify(result);
        res.write(resultString);
        res.end();
    } else if(req.method === 'GET' && data.pathname === '/api/unixtime'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        result = {
            unixtime: Math.floor(date),
        };
        res.write(JSON.stringify(result));
        res.end();
    }
    else {
        console.log('error');
        res.statusCode = 404;
        res.end();
    }
}).listen(PORT);
