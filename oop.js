//object oriented programming - oop - a way of programming ----------> IMP very
class Car {
  constructor(brand, country) {
    this.brand = brand; //this points to the current object
    this.country = country;
    // console.log(country); // Japan Germany
  }

  printDetails() {
    console.log("Details:", this.brand, this.country);
  }
}

let swift = new Car("Maruti", "Japan"); //creating and object
let fiesta = new Car("Ford", "Germany"); //creating and object -- for each object constructor will be called

swift.printDetails(); //swift is an instance
fiesta.printDetails();

//instance - id/identifier /name/

//method
let person = {
  firstname: "Anjum",
  lastname: "Inamdar",
  talk: function (hometown, state) {
    //talk is method
    console.log(
      "Hello my name is",
      this.firstname,
      this.lastname,
      "from",
      hometown,
      state
    );
  },
};

let person1 = {
  firstname: "Sajid",
  lastname: "Inamdar",
  //   talk: function () {
  //     // //talk is method
  //     // console.log("Hello my name is", this.firstname, this.lastname); //here we are repeating same method from first object, which can be avoided by call method
  //   },
};
console.log(person.firstname);
person.talk();
person.talk.call(person1); //call method here we can borrow function instead of duplicating data

person.talk("belgaum", "karnataka");
person.talk.call(person1, "hubli", "karnataka");

//apply() - similar to call but parameters to be passed in [] list
person.talk.apply(person1, ["dandeli", "karnataka"]);

//bind - to connect 2 different obj

//js prototype - like watchman/ secret gatekeeper - if you want to add anything to the function later

//inheritance
//protype chainining -- child.prototype = new parent();
//class extends - child extends parent

//SOLID Principles
