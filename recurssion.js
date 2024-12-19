function checkEvenOdd(c) {
  if (c % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(50); //Even

//in recussion a function calls itself

function greet() {
  console.log("Hello");
  //greet(); // here n number of times it keeps calling itself this is recursion
}
greet();

// function greetnew(i) {
//   console.log(i);
//   i++;
//   greetnew(i); -- it will end abrubtly
// }
// greetnew(1);

function greet2(i) {
  if (i === 11) {
    //base case -- is when that condn is reached your repeated function call should stop
    return;
  } else {
    console.log(i);
    i++;
    greet2(i);
  }
}

greet2(1);

//Print first 5 whole numbers;
function wholeNum(j) {
  if (j === 5) {
    return;
  } else {
    console.log(j);
    j++;
    wholeNum(j);
  }
}
wholeNum(0);

//Recursion used alternative to loop
//recursion is a function call, loop is a block call

//factorial - eg fact(5) = 5*4*3*2*1 or 5* fact(4)
// f(n) = n * f(n-1)

//find factorial recursively
function factorial(n) {
  if (n === 1) {
    //base case
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//recursive calls get stored always in stack

//we can also do the above in another ways for eg

function factorialnew(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorialnew(5));

//find the product of first 5 natural numbers
function product(n) {
  if (n === 6) {
    return;
  } else {
    return n * product(n + 1);
  }
}
product(1);

//find the sum of first n natural numbers
function naturalSum(k) {
  if (k === 11) {
    return 0;
  } else {
    return k + naturalSum(k + 1);
  }
}
console.log(naturalSum(1));

//Fibonacci Series - from 3rd number it is always equal to sum of previous 2 numbers
//0,1,1,2,3,5,8,13.......

// function FibonacciNum(n) {
//   if (n < 13) {
//     return FibonacciNum(n - 1) + FibonacciNum(n - 2);
//   }
//   const num = 7;
//   for (let i = 0; i < num; ++i) {
//     console.log(FibonacciNum(1));
//   }
// }

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const num = 13;

for (let i = 0; i < num; ++i) {
  console.log(fibonacci(i));
}

//BAse case is the terminating condition of recursion
//Recursion is nothing but a function calling itself

//Recurrence Relation - equation where you find next term depending on previous term
//MAster Theorem is used to solve recurrence relation in a specific format
