
const fs = require('fs');
const buf = process.argv[2];

const data = fs.readFileSync(buf,"utf8");

console.log(data.toString().split('\n').length-1);


