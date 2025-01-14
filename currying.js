// Currying is a functional programming technique in which a function is transformed into a sequence of functions, each taking a single argument. 
// Instead of taking all arguments at once, the curried function takes them one by one, returning a new function for each argument until all arguments are provided.


function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3));


function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const curriedMultiply = multiply(2)(3)(4);
console.log(curriedMultiply);


const multiply2 = a => b => c => a * b * c;

console.log(multiply2(1)(2)(3));
