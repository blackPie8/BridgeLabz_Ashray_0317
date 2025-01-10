// The this keyword in JavaScript is a dynamic context-dependent reference 


// 1) When this is used in the global scope, it refers to:
// window object in browsers.
// global object in Node.js.



//  2) Inside a Function
// Non-strict mode: this refers to the global object (window or global).
// Strict mode: this is undefined.


function globalFunc() {
  console.log(this);
}

function strictFunc() {
  "use strict";
  console.log(this);
}

globalFunc();
strictFunc();


// 3) When a method is called on an object, this refers to the object itself.

const obj = {
  name: "Ashray",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet();


// 4) Arrow functions do not have their own this. Instead, they inherit this from their enclosing lexical scope.

const obj2 = {
  name: "Stan",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};

obj2.greet();


// 5) Inside a class, this refers to the instance of the class.


// 6) In an Event Listener
// this refers to the element that triggered the event.

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log(this);
// });


// 7) Using this with call, apply, and bind
// These methods allow you to explicitly set the value of this.


function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Batman" };

greet.call(person);
greet.apply(person);

const boundGreet = greet.bind(person);
boundGreet();


// 8) In Constructor Functions
// When a function is used as a constructor (new keyword), this refers to the new object being created.


function Animal(type) {
  this.type = type;
}

const animal1 = new Animal("Cat");
console.log(animal1.type);