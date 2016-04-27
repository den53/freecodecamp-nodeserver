var readFileFromDir = require('./program-5.js');

var path = process.argv[2];
var extension = process.argv[3];

readFileFromDir(path,extension,function(err,list){
    if(err){
        throw err;
    }

    for (var filename in list){
        console.log(list[filename]);
    }
});
