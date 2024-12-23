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

    deleteAtFirst(){
        if(!this.head) return false;

        this.head = this.head.next;
    }

    traverse(){
        if(!this.head) return false;

        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }

    // view first element

    viewElement(){
        if(!this.head) return false;

         return this.head.value;
    }
}


class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.insertAtEnd(value);
        return;
    }

    dequeue(){
        let ans = this.list.viewElement();
        this.list.deleteAtFirst();
        return ans;
    }

    peek(){
        return this.list.viewElement();
    }

    isEmpty(){
        return this.list.size === 0;
    }

    printQueue(){
        this.list.traverse();
        return;
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.peek());

queue.printQueue();
console.log(queue.dequeue());
queue.printQueue();