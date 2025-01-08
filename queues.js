class Queue{
  constructor(){
    this.items = [];
  }

  enqueue(value){
    this.items.push(value);
  }

  dequeue(){
    if(this.isEmpty()){
      throw new Error("Queue Underflow");
    }
    return this.items.shift();
  }

  peek(){
    if(this.isEmpty()){
      throw new Error("Empty Queue");
    }
    return this.items[0];
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

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.print();
console.log(queue.dequeue());
console.log(queue.size());
queue.print();