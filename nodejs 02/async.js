// Why Async is the heart of Node.js
// node.js is:
//1.Single-threaded
//2.Non-blocking


//Blocking example (BAD in Node)
const fs = require('fs');

const data = fs.readFileSync('file.txt','utf-8');
console.log(data);

console.log('Done');

// problem: Node stop everything and wait for file to finish reading