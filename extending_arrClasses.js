// By extending Array, you can add custom methods to manipulate array data.

class UniqueArray extends Array{

  addUnique(value){
    if(!this.includes(value)){
      this.push(value);
    }
  }
}

const unique = new UniqueArray(1, 2, 3);
unique.addUnique(2);
unique.addUnique(4);
console.log(unique);


// Custom error classes are useful for creating descriptive, domain-specific errors.

class ValidationError extends Error{
  constructor(message, field){
    super(message);
    this.name = "Validation Error";
    this.field = field;
  }
}

try{
  throw new ValidationError("Invalid input", "email");
}

catch(error){
  console.log(error.name);
  console.log(error.message);
  console.log(error.field);
  console.log(error instanceof ValidationError);
  console.log(error instanceof Error);
}


// Custom Stack Class (Extending Array)

class Stack extends Array {
  push(item) {
    if (this.length >= 10) {
      throw new Error("Stack overflow");
    }
    super.push(item);
  }

  pop() {
    if (this.length === 0) {
      throw new Error("Stack underflow");
    }
    return super.pop();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
// stack.pop(); // Error: Stack underflow
