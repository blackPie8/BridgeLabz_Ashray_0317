// Prototypal inheritance is a key feature of JavaScript that allows objects to inherit properties and 
// methods from other objects.
//  This mechanism is built upon the concept of a prototype, which is an object that other objects can use as 
// a template or blueprint.


const person = {
  greet: function () {
      console.log(`Hello, my name is ${this.name}`);
  }
};

const student = Object.create(person);
student.name = "Alice";
student.greet();