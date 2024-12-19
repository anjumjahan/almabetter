//1. The name of the function should be in camelCase
//2. The name of the function should be explicit
//3. The name of the function should be action based

// function < name of the function> (Parameters) {
//     //body of the function
// }

function getSum(num1, num2) {
  //num1, num2 are parameters
  total = num1 + num2;
  //   return total;
  console.log(total);
}

getSum(2, 3); // 2 and 3 are arguments
getSum(4, 5); // calling a function

//example 2
function greet(username = "user") {
  // user is the default para
  console.log("Welcome" + " " + username);
}
greet("anjum");
greet("meher"); // calling a function
greet(); //undefined ----> for this we can define default parameters

//return statement
//example - make an array of all the odd numbers from 1 to 10
//[1,3,5,7,9- output]
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];

function checkIfOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// var a = checkIfOdd(1);
// if (a === true) {
//   result.push(1);
// }
// // checkIfOdd(2);
// // checkIfOdd(3);
// // checkIfOdd(4);
// // checkIfOdd(5);
// // console.log(a);
// console.log(result);

//using loop for the same
// for (var i = 1; i < 10; i++) {
//   var a = checkIfOdd(i);
//   if (true) {
//     result.push(i);
//   }
// }
// console.log(a);

console.log(checkIfOdd(7));

//Helper functions - anything that helps a function to achieve something
// example - print factorial od all the odd numbers in the range 1 to 5

// function finding odd number
function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num--;
  }
  return fact;
}

//function for finding factorial
function checkOdd(num) {
  //num in line 68 and 77 is different, and in 77 and 78 is same
  if (num % 2 !== 0) {
    //return factorial
    var a = factorial(num); // helper function
    console.log(a);
  }
}

//factorial is a helper function for checkodd function
checkOdd(5);
checkOdd(2);
checkOdd(7);

//benefits of functions
//1. it is reusable
//2. it makes your code manageable
//3. makes your code easy to read
//4. function can be called anywhere in the program\

//functions expression -- another way to define a function
/*1.if the function does not have a name -- its called anonymous function
 */

const x = function (num1, num2) {
  //storing anonymous func inside variable is called func exp
  return num1 + num2;
};

//calling func exp
console.log(x(2, 3)); // 5

//Types of functions
/* 1. Arrow functions --> shorter way to write the function after Es6
2. anonymous func -> func without func name
*/
//arrow func
const y = (num1, num2) => {
  return num1 + num2;
};
console.log(y(2, 3));

//if only 1 parameter then no need to put brackets
const z = (num1) => {
  return num1 + 5;
};

//if body has only 1 line then no need of curly braces or return
const e = (num3) => num3 + 5;

//function execution ->
main();
{
  foo(1);
  foo(2);
}

//JS Hoisting - works only with var keyword, not with let and const
//variable hoisting
console.log(test); //using variable before declaring
var test = "maths"; //undefined - because only declaration goes up as per hoisting, not the initialization (maths)
console.log(test); //maths

//function hoisting
greetHere();
function greetHere() {
  console.log("Welcome");
}
