// A decorator is essentially a function that is applied to a class, method, property, or parameter to modify 
// or enhance its behavior.

// Works in transpiler like TypeScript or Babel.

function Logger(constructor) {
  console.log(`Creating instance of ${constructor.name}`);
}

@Logger
class Person {
  constructor(name) {
      this.name = name;
  }
}

const p = new Person("Alice");