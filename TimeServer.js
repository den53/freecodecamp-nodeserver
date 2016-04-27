var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function(socket){
    //socket handling logic

    //create date "YYYY-MM-DD hh:mm"
    //var date = new Date();
    //var data =  date.getFullYear().toString()+'-'+date.getMonth().toString()+'-'+date.getDay().toString()+' '+date.getTime();
    //console.log('client connected');
    var data = strftime('%F %R\n');
    socket.write(data);
    socket.end();
});

server.listen(port);
