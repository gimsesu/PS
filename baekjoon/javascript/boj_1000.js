var fs = require("fs");

var input = fs.
    readFileSync("/dev/stdin").
    toString().
    split(" ").
    map(function (a) {
        return a*1
    });

console.log((input[0] + input[1]).toString());