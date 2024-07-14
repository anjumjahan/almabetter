//loops and iterations
//for loop
/*
for loop syntax
for(initial exp; condn; update exp)
initial exp - from where to start
condition - when to stop
update exp - how to update
*/

points = [3, 4, 1];
// points[0] = points[0] + 1;
// points[1] = points[1] + 1;
// points[2] = points[2] + 1;
// points[i] = points[i] + 1;

// addition of 1 points

// points = [4,5,2]

for (i = 0; i <= 2; i++) {
  console.log(points[i]);
}

//example 2
nums = [1, 2, 4, 9, 10, 13, 15, 19];
for (i = 1; i < 8; i = i + 2) {
  console.log(nums[i]);
}

//infinite for loop --> if condn is false /if no update stmt (example - i>=0)
for (i = 0; i < 10; i++) {
  console.log(i);
}

//for... in loop
const user = {
  name: "anjum",
  age: 10,
  class: 5,
};
//for(key in object) ->>> key can be any variable, k, a, b etc -> one key at a time
for (k in user) {
  console.log(k, ":", user[k]);
}

//for.. in string
let sname = "jahan";
for (a in sname) {
  console.log(a, ":", sname[a]);
}

//for.. in with array
arr = [1, 2, 3];
for (b in arr) {
  console.log(b, ":", arr[b]);
}

//for... of loop
//for(i in object)

//while loop
//print first 10 natural numbs
i = 1; //intialization
while (i < 11) {
  //condn
  console.log(i);
  i++; //update stmt
}

//do while loop
i = 0;
do {
  console.log("Hello");
  i++;
} while (i < 5);
