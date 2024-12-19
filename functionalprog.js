//Functional Programming - another way of programming where  everything is function
// this was there before oops

//Pure Function - same input - same output everytime

let d = 5;
function modify(x) {
  //pure function
  let c = 1;
  d = 70;
  return x + 1;
}

function modify2(x) {
  //impure function
  return x + d; //here d is used outside the scope of the function so it is side effect
}

modify2(5); //10
modify(1); //2
modify2(5); //75

//example 2 for testing
function double(x) {
  return x * 2; //scope of the function
}
result = double(4);
if (result == 8) {
  //passed
}

//example 3 - pure function
function greet(name) {
  return `Hello ${name}`;
}

//example 4 - impure func
let greeting = "Hello"; //side effect - out of the scope, it could change, so this is impure function
function notPureGreet(name) {
  return `${greeting} ${name}`;
}

//first class objects/citizens
function speak(string) {
  console.log(string);
}
speak("Hello");

var talk = speak;
talk("Hi");
talk.myProperty = "bananas";
console.log(talk.myProperty);
console.log(speak.myProperty);

//higher order function
let myNums = [1, 2, 3, 4, 5];
function doubleNum(num) {
  return num * 2;
}

let doubledNum = myNums.map(function (num) {
  //here map function is a higher order funtion
  return num * 2;
});
console.log(doubledNum);

//asynchronous functions

//function composition - o/p of 1 function serves as input for other func, etc
let user = {
  name: "anjum",
  city: "belgaum",
};

//get the name of the user and make it upper case ---> ANJUM
// 1. get the user name
//2. change it to uppercase

function getName(user) {
  return user.name;
}

function capital(name) {
  return name.toUpperCase();
}

//I/p of the capitalized function is o/p of the getName function

// let a = getName(user);
// let res = capital(a);

let res = capital(getName(user)); // output of getName(user) function serves as an input for capital function, this is function composition

//alternate way of doing function composition -- compose and pipe
const compose = (g, f) => (x) => g(f(x));

//reduce - returns single value
//... -> 3 dots is the spread operator
//pipe - left to right (same as compose)

//immutability -> unchangable - const
const username = {
  name: "anjum",
};
Object.freeze(username);
username.name = "sajid";
console.log(username.name); //anjum

//declarative vs imperative - 2 ways of programming
nums = [1, 2, 3, 4, 5];
for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]); //HOW - here we are saying how to print (this is imperative)
}

nums.map(function (num) {
  console.log(num); //WHAT - here we are saying what to print (this is declarative)
});

//import
import add from "./es";
function findSum(a, b) {
  add(a, b);
}

findSum(3, 4);
