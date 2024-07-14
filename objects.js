//object
const student = {
  name: "anjum", //key - value
  age: 29,
  lname: "Inamdar", //property
};

console.log(student);
console.log(typeof student.age); //number
console.log(typeof student.name); //string
console.log(typeof console); // object - everything in JS is object
console.log(student.name); // to fetch the value of name key - o/p anjum
console.log(student["age"]); // another method - 29

//JS nested objects - objects inside objects
const student1 = {
  name: "Sajid",
  age: 32,
  marks: {
    maths: 90,
    science: 75,
  },
};
console.log(student1.marks);
console.log(typeof student1.marks); // object
console.log(student1.marks.science); // 75

//methods - functions that can do particluar code or logic
const person = {
  name: "Anjum",
  age: 29,
  greet: function () {
    console.log("hello");
  },
};

person.greet(); //hello
console.log(person.age);

//built in method
let num = "23.32";
let result = parseInt(num);
console.log(result); // 23
let result1 = parseFloat(num);
console.log(result1); // 23.32

//adding method
let newstud = {};
newstud.name = "Meher";
newstud.greet = function () {
  console.log("hellowww");
};

newstud.greet();
console.log(newstud);

//this keyword
const human = {
  name: "Siraj",
  age: 60,
  greet: function () {
    console.log("The name is" + " " + this.name);
  },
};

human.greet();

//JS sets - to remove duplicates
const letters = new Set(["a", "b", "c", "a"]);
console.log(letters);

//foreach

//maps - key value pairs data sets
const fruits = new Map([
  ["apples", 500],
  ["oranges", 200],
]);

//json - this is also key value pairs - to send and receive data using api calls
//json only for data, no method or functions

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
