//this is where js pro starts

//map ---- transforms data
//creates a new array by applying a function to each element

const numbers = [1, 2, 3, 4];

const squared = numbers.map( num => num * num);
console.log(squared);

//map never changes the orriginal array


// filter -- select data 
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)