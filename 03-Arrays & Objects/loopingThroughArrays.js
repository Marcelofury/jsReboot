const fruits = ['apple', 'banana', 'mango'];

// for loop  (classic)

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for ...of loop (clean and modern)
for(const fruit of fruits){
    console.log(fruit);
}