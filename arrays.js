//array using literal
const routine = ["sleep", "eat", "brush"];
console.log(routine);

//using new keyword
const daily = new Array("sleep", "eat");
console.log(daily);

//empty array
const myList = [];
console.log(myList);

//array of numbers
const numArray = [2, 4, 6, 8];
console.log(numArray);

//array of mixed datatypes
const newData = ["work", "eat", 1, true];
console.log(newData);

//storing arrays, functions, objects
const dataNew = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];
console.log(dataNew);

//to access elements of an array
const myArray = ["h", "e", "l", "l", "o"];
//to access first element
console.log(myArray[0]); //h
//to access second element
console.log(myArray[1]); //e

//to add an element to the array
//push method
let dailyActivities = ["eat", "sleep"];
console.log(dailyActivities);
dailyActivities.push("dream");
console.log(dailyActivities);

//unshift method
dailyActivities.unshift("brush");
console.log(dailyActivities);

//change the element of an array
dailyActivities[6] = "acheive";
console.log(dailyActivities);

//to remove an element from an array
//pop method
dailyActivities.pop();
console.log(dailyActivities);
const removedElement = dailyActivities.pop();
console.log(removedElement);

//shift method
dailyActivities.shift();
console.log(dailyActivities);

//length of an array
const dailywork = ["eat", "sleep", "repeat"];
console.log(dailywork.length); //3

//JS array methods
let dailyActivities1 = ["sleep", "work", "exercise"];
let newRoutine = ["eat"];
let ages = [4, 9, 16, 25, 36, 49];
//sort elements in alphabetical order
dailyActivities1.sort();
console.log(dailyActivities1);
//finding the index position of the string
const position = dailyActivities1.indexOf("work");
console.log(position); // 2
//slicing the array elements
const newDailyActivities = dailyActivities1.slice(2);
console.log(newDailyActivities); //work
//concatinating 2 array
const routine1 = dailyActivities1.concat(newRoutine);
console.log(routine1);
//filter an array
const adults = ages.filter(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(adults);

let arr = ["h", "e"];
let arr1 = arr;
arr1.push("I");

console.log(arr);
console.log(arr1);

let arr2 = ["h", "e"];
arr2.name = "Anjum";

console.log(arr2);
console.log(arr2.name);
console.log(arr2["name"]);

//multi dimensional array
const data = [
  [1, 2, 3],
  [1, 3, 4],
  [4, 5, 6],
];
console.log(data);

//example 2 of multidimensional array
let studentdata = [
  ["jack", 24],
  ["sara", 23],
  ["peter", 24],
];
let student1 = ["jack", 24];
let student2 = ["sara", 23];
let student3 = ["peter", 24];
let studentdataother = [student1, student2, student3];
console.log(studentdata);
console.log(studentdataother);

//access elements of an array
console.log(studentdata[0]);

//iterate using multidimensional
let studdata = [
  ["jack", 24],
  ["sara", 23],
];
studdata.forEach((stud) => {
  stud.forEach((data) => {
    console.log(data);
  });
});
