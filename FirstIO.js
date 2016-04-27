var fs = require('fs');
//get filepath
var filepath = process.argv[2];

//read file
var fileBuffer = fs.readFileSync(filepath,'utf8');
//count with a regex
function countOcurrences(str, value){
    var regExp = new RegExp(value, "gi");
    return (str.match(regExp) || []).length;
}

console.log(countOcurrences(fileBuffer,'\n'));
