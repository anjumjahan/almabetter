//JS Miscellaneous Concepts

//Regular Expression - Regex - defines a sequence of characters (mostly used for matching) its like creating a pattern
//2 ways to create Regex

// 1. pattern = /_______________/ -> whatever written in / / is regex
//List of students whose name starts with a
//^ - start with
//. - one character after

//metachracter - characters haveing special meaning -> .
// \w - finding a word - word charachter

// const pattern = /\w\s\w/;
const pattern = /[^abc]/;
const input = "def";
// const result = pattern.test(input); //use test to test pattern
// console.log(result);

//JS Regex methods
const result = pattern.exec(input); //use test to test pattern
console.log(result);

//Example 2
const a = /me/;
const i = "Find me";
const res = i.search(a);
console.log(res); //5 -> returns index

//Regex flags
//g - global
//gi - global insensitive

//email validation example
const pattern1 = /\S+@[a-z]+.\S+/;
const input1 = "anjum@gmail.";
const result1 = pattern1.test(input1);
console.log(result1);

//JS Debugging
