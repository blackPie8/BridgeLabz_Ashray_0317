class Node{
    constructor(value){
    this.value = value;
    this.next = null;
    }
}

class LinkedList{
    costructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
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

    deleteAtEnd(){
        if(!this.head) return false;

        let curr = this.head;
        let next = curr.next;

        if(this.head.next === null){
            this.head = null;
            this.size--;
        }
        else{
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
           }
           curr.next = null;
           this.size--;
        }
    }

    traverse(){
        if(!this.head) return false;

        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }

    viewElement(){
            if(!this.head) return false;
    
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            return curr.value;
        }
    }


// let stack = new LinkedList();

// stack.insertAtEnd(10);
// stack.insertAtEnd(20);
// stack.insertAtEnd(30);
// stack.insertAtEnd(40);
// stack.insertAtEnd(50);

// stack.deleteAtEnd();
// stack.traverse();
// stack.viewElement();

class Stack{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.insertAtEnd(value);
    }

    pop(){
        let ans = this.list.viewElement();
        this.list.deleteAtEnd();
        return ans;
    }

    peek(){
        return this.list.viewElement();
    }

    isEmpty(){
        return this.list.size === 0;
    }

    printStack(){
        this.list.traverse();
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.printStack();
console.log(stack.pop());
stack.printStack();
// console.log(stack.peek());
console.log(stack.isEmpty());