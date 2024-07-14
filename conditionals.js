//comparison operators
// == (Equal to )
const a = 10;
const b = 20;
console.log(a == b); //false

// != (not equal to)
console.log(a != b); //true

//=== (strictly equal to)
console.log(a === b); //false

// !== (strictly not equal to)

const c = "20";
console.log(b !== c); // true

// greater than >
console.log(a > b); //false
console.log(c > b); //false

//logical operators
//And operator (&&)
const username = "anjum";
const password = "pwd";

if (username == "anjum" && password == "anjum123") {
  console.log("Welcome to your fb account");
} else {
  console.log("Dont try to hack!!!");
}

//OR (||)
const number = 1234;
if (username == "anjum" || number == 234) {
  console.log("Welcome");
}

//NOT (!)
const ans = true;
console.log(!ans); //false

//if else - conditionals

/*
1. if statement
2. if else
3. if else if else

*/

// if(you come first){
//     you get a new ReadableByteStreamController
// }
const rank = 1;
if (rank == 1) {
  console.log("You get a new ball");
} else if (rank == 2) {
  console.log("You get a new pen");
} else if (rank == 3) {
  console.log("You get an eraser");
} else {
  console.log("You dont get anything");
}

//nested conditions
//if you get a first rank and 100 in maths you get a new bat else you get a new ball , otherwise you dont get anything
if (rank == 1) {
  if (mathmarks == 100) {
    console.log("Yo get a new bat");
  } else {
    console.log("get a new ball");
  }
} else {
  console.log("You dont get anything");
}

//switch statment
//hostel menu
const day = 7;
switch (day) {
  case 1:
    console.log("Poha");
    break;
  case 2:
    console.log("Upma");
    break;
  case 3:
    console.log("Puri");
    break;
  case 4:
    console.log("Idly");
    break;
  case 5:
    console.log("Dosa");
    break;
  case 6:
    console.log("Aloo Paratha");
    break;
  default:
    console.log("Make your own breakfast");
    break;
}
