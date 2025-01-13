// ---------Property Descriptors and Flags

// Data Property

const obj = {};

Object.defineProperty(obj, "name",{
  value: "Ashray",
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(obj.name);
obj.name = "Stan";
console.log(obj.name);


// Accessor Property

const obj2 = {};

Object.defineProperty(obj2, "age",{
  get(){
    return this._age;
  },

  set(value){
    if (value < 0) {
      console.log("Age must be positive.");
    } else {
      this._age = value;
    }
  },
  enumerable: true,
  configurable: true
});

obj2.age = 21;
console.log(obj2.age);

// Use Object.getOwnPropertyDescriptor() to get the descriptor of a property.

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);

console.log(Object.entries(obj2));