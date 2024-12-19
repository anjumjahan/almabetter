// Here is a list of different operators you will learn in this tutorial.

// Assignment Operators
// Arithmetic Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Other Operators

// const a = 3,
//   b = 2;
// console.log(a > b);
// console.log(a < b);

//console.log(2 === "2");
// const name = "anjum";
// const name1 = "jahan";
// const result = `The names are ${name} and ${name1}`;
// const test = 'My name is "Anjum".';
// console.log(name1[2]);
// console.log(name1.charAt(2));
// let a = "anjum";
// a = "jahan";
// console.log(a);

// const a = "a";
// const b = "A";
// console.log(a === b);

// //JS multiline using + operator
// const msg1 =
//   "This is a long message" +
//   "that spans across multiple lines" +
//   "in the code.";
// console.log(msg1);

// const msg2 =
//   "This is a long message\
// that spans across multiple lines\
// in the code";
// console.log(msg2);

// console.log(msg1.length);
// const name = "My name is 'Amjum'";
// console.log(name);

// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log(string);
// console.log(reverseEntireSentence);
// console.log(reverseEachWord);

let myname = "anjum jahan inamdar";
let newname = reverseBySeparator(myname, "");
let wordname = reverseBySeparator(newname, "");

function reverseBySeparator(myname, separator) {
  return myname.split(separator).reverse().join(separator);
}
console.log(myname);
console.log(newname);
console.log(wordname);
