// Proxy Functions

// Proxies in JavaScript are objects that allow you to customize or redefine fundamental operations for 
// another object, such as property access, assignment, enumeration, or function invocation.
// They are part of the ES6 (ECMAScript 2015) standard and provide a way to intercept and customize the     
// behavior of objects or functions.


const target = {
  message: "Hello, World!"
};

const handler = {
  get: function (obj, prop) {
      if (prop in obj) {
          return obj[prop];
      } else {
          return `Property "${prop}" does not exist.`;
      }
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);
console.log(proxy.nonexistent);