var http = require('http');
var bl = require('bl');

var results = [];
var resultCount = 0;
for(i=2; i<=4; i++){
    url = process.argv[i];
    http.get(url, function(response){
        response.pipe(bl(function(err, data){
            if(err){
                throw err;
            }
            //console.log(data.toString());
            results.push(data.toString());
        }));
        response.on("end", function(){
            resultCount++;
            if(resultCount===3){
                for(b=0;b<3;b++){
                    console.log(results[b]);
                }
            }

        });
    });

}
