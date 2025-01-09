

// ----------Shallow copy vs Deep copy

// Shallow copy ...spread operator

const original1 = { a: 1, b: { c: 2 } };
const shallowCopy =  {...original1};

shallowCopy.b.c = 8;
shallowCopy.a = 3;
console.log(original1)

console.log(shallowCopy);

// Object.assign()

const original2 = { a: 1, b: { c: 2 } };
const shallowCopy2 = Object.assign({}, original2);


// Deep copy JSON.stringify and JSON.parse

const original3 = { a: 1, b: { c: 2 } };
const deepCopy1 = JSON.parse(JSON.stringify(original3));

deepCopy1.b.c = 8;
console.log(original3)

console.log(deepCopy1);


// Libraries (e.g., Lodash)

// const _ = require('lodash');
// const deepCopy = _.cloneDeep(original);


// -----------Object Refrences 
// When you assign an object to a variable,
//  the variable stores a reference (or pointer) to the memory location of the object, not the object itself.
// Changes to the object through one reference affect all other references to the same object


// also an example of pass by reference

const obj1 = { name: "Alice" };
const obj2 = obj1;

obj2.name = "$tan";

console.log(obj1.name);