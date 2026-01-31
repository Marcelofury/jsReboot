// The Event Loop 
// Mental Model
// Node has : 
// 1. Call Stack (execute js)
// 2.Callback queue
// 3. Event Loop(traffic police)
//
//Flow
//1.js runs line by line
//2. Async task goes to background
//3.Callback waits in queue
//4.Event loop pushes it back when stack is free
//        Thats how node handles many users with one thread

// example

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
},0);

console.log('End');