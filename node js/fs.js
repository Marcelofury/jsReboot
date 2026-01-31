const fs = require('fs');
fs.writeFileSync('test.txt', 'hello Node');// write a file

const data = fs.readFileSync('test.txt', 'utf-8'); //read a file
console.log(data);


//node can read/write files --browsers cannot