var argv = process.argv;
var argvLength = argv.length;
var sum = 0;

for (i=2; i<argvLength; i++){
    sum = sum + Number(argv[i]);
}

console.log(sum);
