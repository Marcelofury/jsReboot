const user = {
    name : 'Marcel',
    age: 22,
    role: 'student'
};

console.log(user);

//Adding,Updating and deleting Properties
// Add new property
user.height = 180;
console.log(user);

//update property
user.age = 23;
console.log(user);

// delete property
delete user.height;
console.log(user);