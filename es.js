//ES - Ecma Script - this is standard - which tells us the rules, practices etc
//Es6 - ES 2015

//ES6 features
/* 
1. Let keyword - block scope
2. const keyword
3. arrow functions
4. JS Classes
5. default parameter value
6. template literals
7. Destructuring //widely  used
8. Import and Export
9. JS rest parameter and spread operator
10. JS Promises

*/
//var - not block scoped
var a = 5;

{
  var a = 10;
  console.log("inside block", a);
}
console.log("outside block", a);

//let - block scoped
let b = 5;
{
  let b = 10;
  console.log("inside block", b);
}
console.log("outside block", b);

//const is also block scoped
const c = 5;
{
  const c = 10;
  console.log("inside block", c);
}
console.log("outside block", c);

//default parameter
function greet(name = "User") {
  console.log("Hello", name);
}
greet();
greet("Anjum");
greet();

//Template Literals
//print Hello my name is _____. I am from _____.
const name = "Anjum";
const city = "Belgaum";
console.log(`Hello, my name is ${name}. I am from ${city}`); //template literal

console.log("Hello, my name is" + name + ".I am from" + city); //another way

//Destructuring
const person = {
  name: "abc",
  age: "x",
};
// let n = person.name; - could do this
// let d = person.age;
let { age } = person;
console.log(person);

//Import and export

export default function add(a, b) {
  //make the func accessible in other files - export
  console.log(`sum is ${a + b}`);
}
add(5, 4);

//rest parameter - remaining parameters
function greeting(name1, name2, name3, name4, name5, name6) {
  console.log(name1);
}
greeting("one", "two", "three", "four", "five", "six");

//if i wanted to fetch only 1st one, then writing all the others will be waste so in that case we can use the rest parameter
function greeting1(name1, ...other) {
  //other is variable name anything can be given here
  console.log(name1);
  console.log(other);
}
greeting1("one", "two", "three", "four", "five", "six");

//spread operator -- ...
arr1 = ["Good", "Evening"];
arr2 = [...arr1, "All", "Of", "You"]; //spread
console.log(arr2);

//JS Promises - same as in real life
let myPromise = new Promise(function (resolve, reject) {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Successful");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((message) => {
    console.log(`This is in then, ${message}`);
  })
  .catch((message) => {
    console.log(`This is in the catch, ${message}`);
  });

//Intro to ES modules - block of tasks
//ES modules - Ecma Script standard for working with modules
//1. Common JS module - used at server side -
//2. AMD module - Async module defination
//3. UMD - universal module defination -> combination of AMD + common js
//4. ES harmony - can be used both on client and server system - widely used

//Renaming of imports and exports using "as"

//use strict - entire code should be executed in strict mode
("use strict"); //- it is block ScriptProcessorNode, if written at top then whole file will use "use strict"
let n = 10;
console.log(n);

/* -- to write clean and better code
1. always declare a variable
2. declare object
3. Cannot delete an object
4. You cannot duplicate a parameter
5. the variable name cannot be arguments or eval
6. do not use it for reserve keywords - implements, interface, let, package, private, protected, yield, static, public
*/

person = {
  namefirst: "Anjum",
};
delete person;

function addition(a, a) {
  console.log(a);
}

//Lodash - is library - it has lots of methods ---------> npm install lodash ( in the terminal)
var l = require("lodash");

var numbers = [1, 2, 3, 4, 5];
let newArray = l.concat(numbers, [8, 9, 10]);
console.log(newArray);

//fill method - to initialize with something
newArray = l.fill(numbers, 99, [(start = 0)], [(end = 4)]);
console.log(newArray);

//join method
newArray = l.join(numbers, "*");
console.log(newArray);

//reverse
newArray = l.reverse(numbers);
console.log(newArray);

//Collections
var users = [
  { name: "abc", age: 16, active: true },
  { name: "qwe", age: 26, active: false },
];
var result = l.every(users, ["active", false]); //every method
console.log(result);

//includes
let list = [1, 2, 3, 4, 5, 6];
var result = l.includes(list, 4);
console.log(result);

let num = [4, 3, 1, 8];
result = l.sum(num);
console.log(result);

result = l.max(num);
console.log(result);

//ludo random number generation
result = l.random(1, 6);
console.log(result);

//Luxon - this is also library ( mostly used for date time functions)- math etc
const { DateTime } = require("luxon");

const now = DateTime.now();
console.log(now);

dt = now.minus({ days: 79 });
console.log(dt);
