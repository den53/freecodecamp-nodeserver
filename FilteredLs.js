var fs = require('fs');
//get path
var path = process.argv[2];
var filter = process.argv[3];

fs.readdir(path,function(err, list){
    if (err){
        throw err;
    }

    for (i=0;i<list.length;i++){
        if(list[i].match('.'+filter.toLowerCase()) || filter === null){
            console.log(list[i]);
        }
    }
});
