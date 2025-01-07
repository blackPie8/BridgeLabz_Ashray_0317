// When an inner function is returned or assigned to a variable, it carries with it a reference to its outer 
// function's scope.
// This "closure" allows it to access the variables and parameters of the outer function.


function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction('outside');
// console.log(newFunction)
newFunction('inside');