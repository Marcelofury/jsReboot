const fruits = ['apple', 'banana', 'mango'];

// arrays can store anything

const mixed = [
    'Marcel',
    20,
    true,
    {role: 'Student'},
    [1,2,3]
];

// common array operations

// length of an array
fruits.length; // 3

// add element 
//add to end
fruits.push('orange');

// add to start
fruits.unshift('pineapple');

// remove element
//remove from end
fruits.pop();

//remove from start
fruits.shift();

// accessing and midfying arrays

fruits[1] = 'grapes';

// arrays are mutable even when declared with cont

const num = [1,2];
num.push(3);
