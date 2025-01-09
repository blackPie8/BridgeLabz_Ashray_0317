// --------define using class keyword

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// // Creating an instance
// const person1 = new Person("Alice", 18);
// person1.greet();


// -------getters and setters 

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be positive.");
    }
  }
}

const person = new Person("Alice", 25);

// Using getters
console.log(person.name);
console.log(person.age);

// Using setters
person.name = "Bob";
person.age = 30;

console.log(person.name);
console.log(person.age);

person.age = -5;


// --------Static Methods

// Static methods are called on the class itself, not on instances

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(3, 4));


// ---------Inheritance

// Classes can inherit from other classes using the extends keyword
// super keyword in JavaScript is used in classes to refer to the parent class. 
// It plays a key role in class inheritance 
// and allows a child class to access and call properties, methods, or constructors of its parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();


// --------Private fields and methods ES2022

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount());
// console.log(counter.#count); // Error: Private field '#count' must be declared in an enclosing class