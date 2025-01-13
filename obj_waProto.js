// The Object.create(null) method creates an object with no prototype.
// They do not inherit from Object.prototype, making them immune to prototype pollution


const obj1 = {};
const obj2 = Object.create(null);

obj1.key = "As";

console.log(obj1.toString);
console.log(obj2.toString);

console.log(obj1.hasOwnProperty('key'));  // obj w/a _proto_ does not have inbuilt functionalities