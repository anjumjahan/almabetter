//js is synchronous  language,---> the above is been executed in sequence
//cz it is single threaded

console.log("1");
console.log("2");

function getData() {
  var n = 1000000;
  while (n > 0) {
    n--;
  }
  console.log("3");
}
getData(); //slight delay
console.log("4");

//Event Loop
//blocking function / blocking task
console.log("1");
console.log("2");

function tryNew() {
  setTimeout(() => {
    //asynchronous functions
    console.log("3");
  }, 1000); //ms
}
tryNew();
console.log("4");

console.log("5");

// async, I/O operation
//hosting environment
//call back queue

//set timeout - only once to be executed after some interval - example -loading page
//set interval - every time after some interval needs to be done - example --clock

//intervalId
//clear timeout
//clear interval
