// ---------Create using object literal

const person = {
  name: "Ash",
  age: 21,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet();

// using object constructor

const obj = new Object();
obj.name = "Jane";
obj.age = 25;

// using constructor function

function Person1(name, age){
  this.name = name;
  this.age = age;
  this.greet = function(){
    console.log("Hi, I'm " + this.name);
  };
}

const person1 = new Person1("Ashray", 21);
person1.greet();

// using classes

class Person2{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person2 = new Person2("$tan", 21);
person2.greet();

// object.create

const prototype = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const object = Object.create(prototype);
object.name = "Ashray $tan";
delete object.name;

object.greet();


// --------Methods on Objects

// object.assign();

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);

console.log(result);
console.log(target);

// Object.freeze and Object.seal

const Person3 = {
  name: "Ash",
  age: 21,
};
// Object.freeze(Person3);

Object.seal(Person3);
Person3.name = "Ashray";
console.log(Person3.name);

// console.log(Person3.surname);



// ---------Iterate on Object via for-in loop

for(const key in Person3){
  console.log(`${key}: ${person[key]}`);
}

// via object.entries()

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}


// ---------Access values via dot or bracket notation

console.log(Person3["age"]);
console.log(Person3.age);


const map = new Map(Object.entries(Person3));

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});