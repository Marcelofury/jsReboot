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

//reduce combines data (most confusing)
const sum = numbers.reduce((total,sum) => {
    return total + sum;
}, 0)


console.log(sum)

//Real World Example (API Data Style)
const users = [
    {name: 'Amina', age: 22, active: true},
    {name: 'John', age: 17, active: false},
    {name: 'Peter', age:30, active:true}
];

// Task: Get names of active users older than 18
const result = users.filter( user => user.active && user.age > 18)

console.log(result)