// Import stylesheets
import './style.css';

// ***********************************
//Iterating over an array and an objct
// ***********************************

//An array
const arr1 = [11, 22, 33];

//An object
const obj1 = {
  name: 'Jose Torres',
  age: 70,
};

//using `forEach()` method
arr1.forEach((item) => console.log(item));
//11 22 33

// obj1.forEach((item) => console.log(item));
// Error: obj1.forEach is not a function

//using `for...` loop  method
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//11 22 33

console.log('Length of obj1: ', obj1.length); //Length of obj1: undefined
//for loop is NOT applicable in the case of object

//using `map()` method
const mapArray = arr1.map((item) => item);
console.log(mapArray); //[11, 22, 33]

// const mapObj = obj1.map(item=>console.log(item));
//Error: obj1.map is not a function

//using `for ... of` method
for (let item of arr1) {
  // display the values
  console.log(item);
}
//11 22 33

/*
for(let item of obj1){
  console.log(item);
}
*/
//Error: obj1 is not iterable

// *************************************************************
//How to loop through an object in JavaScript with a `for…in` loop
// *************************************************************

const user = {
  name: 'Joe Biden',
  age: 77,
  sex: 'male',
};

const author = {
  name: 'Joe Biden',
  age: 77,
  sex: 'male',
  address: {
    street: '1115 S. Central Ave',
    city: 'Los Angeles',
    state: 'California',
  },
};

//Iterate through the object using `for...in` loop
for (const key in user) {
  console.log(user[key]);
}
/*
Joe Biden 
77 
male
*/

for (const key in author) {
  if (author.hasOwnProperty(key)) {
    console.log(`${key}:${author[key]}`);
  }
}
/*
name:Joe Biden
age:77
sex:male
address:[object Object]
*/

//How to loop through an object in JavaScript with object static methods
// ******************************************************************

//Object.keys()
let fields = Object.keys(user);
console.log(fields);
// ["name", "age", "sex"]

//Object.values()
let userValues = Object.values(user);
console.log(userValues);
//["Joe Biden", 77, "male"]

//Object.entries()
let userEntries = Object.entries(user);
console.log(userEntries);
/*
[
  ['name', 'Joe Biden'],
  ['age', 77],
  ['sex', 'male']
]
*/

console.log('Object.entries().map()');
Object.entries(user).map((entry) => {
  let key = entry[0];
  let value = entry[1];

  console.log(`${key} : ${value}`);
});
/*
name : Joe Biden
age : 77
sex : male
*/

//This returns an array of arrays, with each inner array having the [key, value]. You can use any array method to loop through:
for (let arr of userEntries) {
  console.log(arr);
}

/*
  ["name", "Joe Biden"]
  ["age", 77]
  ["sex", "male"]
*/

//We could decide to destructure the array, so we get the key and value:
console.log('destructured [key value]');
for (let [key, value] of userEntries) {
  console.log(`${key}: ${value}`);
}

/*
name: Joe Biden
age: 77
sex: male
*/

const users = [
  {
    name: 'Joe',
    age: 20,
  },
  {
    name: 'Doe',
    age: 73,
  },
  {
    name: 'Yeon',
    age: 44,
  },
  {
    name: 'Mung',
    age: 29,
  },
  {
    name: 'Shelly',
    age: 16,
  },
  {
    name: 'Bob',
    age: 65,
  },
];

//using filter method to list the users who is less than 30 years.
let youngsters = users.filter((user) => {
  return user.age < 30;
});

console.log(youngsters);
/* 
[  
  {  name: 'Joe',  age: 20 },
  {  name: 'Mung',  age: 29 },
  {  name: 'Shelly',  age: 16 }
]
*/

// using reduce method to calculate average age of users
let totalAge = users.reduce((total, prev) => {
  return (total += prev.age);
}, 0);

console.log(Math.round(totalAge / users.length)); //41

//using map method to find users age after 10 years.
let ageAfter10 = users.map((user) => user.age + 10);

console.log(ageAfter10); //[30, 83, 54, 39, 26, 75]
