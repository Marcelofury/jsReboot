// Callbacks (old but found evrywhere)

// What is a callback?
// A function passed into another function, executed later.

//example

function fetchData(callback){
    setTimeout(() => {
        callback('Data received');
    }, 2000);
}


 fetchData(data => {
    console.log(data);
 });


 // problem with callbacks ---> callback hell