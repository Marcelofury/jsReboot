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
//objects are mutable

// objects inside objects
const user1 = {
  name: "Marcel",
  address: {
    country: "Uganda",
    city: "Kampala"
  }
};
console.log(user1);

console.log(user1.address.city);


// objects with methods (function inside objects)
const user2 = {
  name: "Marcel",
  address: {
    country: "Uganda",
    city: "Kampala"
  },
  greet: function(){
    return `Hello, my name is ${this.name}`
  }
};
console.log(user2);
console.log(user2.greet());

// this refers to the object calling the method


// looping through objects
// for ..in

for (let key in user2){
    console.log(key, user2[key]);
};


// object.keys()
console.log(Object.keys(user2));

// Object.values()

console.log(Object.values(user2));

// Object.entries()
console.log(Object.entries(user2))
// perfect for looping
for (const [key, value] of Object.entries(user2)){
    console.log(key,value)
}


// Object destructuring

const user3 = {
  name1: 'Marcel',
  age: 23,
  role1: 'Student'
};


const {name1,role1} = user3;

//Equivalent to

const name1 = user.name1;
const role1 = user.role1;

// rename variables 
const {name1 : fullName } = user3;
console.log(user3);