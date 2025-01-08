class Stack{
  constructor(){
    this.items = [];
  }

  push(value){
    this.items.push(value);
  }

  pop(){
    if(this.isEmpty()){
      throw new Error("Stack Underflow");
    }
    return this.items.pop();
  }

  peek(){
    if(this.isEmpty()){
      throw new Error("Empty Stack");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
  }

  clear(){
    this.items = [];
  }

  print(){
    console.log(this.items.join(" -> "));
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.print();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
stack.print();