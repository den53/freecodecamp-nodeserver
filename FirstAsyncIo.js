var fs = require('fs');
//get filepath
var filepath = process.argv[2];

//read file
fs.readFile(filepath,'utf8', (err, data) => {
    if(err) throw err;
    console.log(countOcurrences(data,'\n'));
});
//count with a regex

function countOcurrences(str, value){
    var regExp = new RegExp(value, "gi");
    return (str.match(regExp) || []).length;
}
