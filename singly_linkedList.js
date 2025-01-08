class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  append(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
    }
    else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  insertAt(value, index){
    if(index < 0 || index > this.size){
      throw new Error ("Index out of bounds");
    }

    const newNode = new Node(value);
    if(index === 0){
      newNode.next = this.head;
      this.head = newNode;
    }
    else{
      let curr = this.head;
      let prev = null;
      let i = 0;

      while(i < index){
        prev = curr;
        curr = curr.next;
        i++;
      }

      newNode.next = curr;
      prev.next =newNode
    }
    this.size--;
  }

  remove(value){
    if(!this.head) return;

    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
      return;
    }

    let curr = this.head;
    let prev = null;

    while(curr && curr.value !== value){
      prev = curr;
      curr = curr.next;
    }

    if(curr){
      prev.next = curr.next;
      this.size--;
    }
  }

  print(){
    let curr = this.head;
    let res ="";

    while(curr){
      res += `${curr.value} -> `
      curr = curr.next;
    }
    console.log(res + "null");
  }

  size(){
    return this.size;
  }

  isEmpty(){
    return this.size === 0;
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);

ll.print();
ll.remove(30);
ll.print();

ll.insertAt(30,2);
ll.print();