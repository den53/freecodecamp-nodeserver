var fs = require('fs');
//get path
var path = process.argv[2];
var filter = process.argv[3];

var readFileInDir = function(dirname, extension, callback){
    fs.readdir(dirname, function(err, list){
        if (err){
            callback(err);
        }
        else {
            extension = '.' + extension;
            list = list.filter(function(name){
                return name.match(extension);
            });
            callback(null,list);
            }
        }
    );
};

module.exports = readFileInDir;
