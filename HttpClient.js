var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
    response.on("error", function(err){
        throw err;
    });
    response.on("data", function(data){
        console.log(data.toString());
    });
    response.on("end", function(end){
        console.log("");
    });
});
