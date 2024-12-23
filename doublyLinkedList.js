class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert value at end

    insertAtEnd(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Traverse forward

    traverseForward(){
       let curr = this.head;
       let elements = [];

       while(curr){
        elements.push(curr.value);
        curr = curr.next;
       }
       console.log(elements.join(" <-> "));
    }

    // Traverse backward

    traverseBackward(){
        let curr = this.tail;
        let elements = [];

        while(curr){
            elements.push(curr.value);
            curr = curr.prev;
        }
        console.log(elements.join(" <-> "));
    }

    // Delete by Value

    deleteByValue(value) {
        if (!this.head) return;

        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                if (curr === this.head) {
                    this.head = curr.next;
                    if (this.head) this.head.prev = null;
                }
                if (curr === this.tail) {
                    this.tail = curr.prev;
                    if (this.tail) this.tail.next = null;
                }
                if (curr.prev) {
                    curr.prev.next = curr.next;
                }
                if (curr.next) {
                    curr.next.prev = curr.prev;
                }
                
                this.size--;
                return;
            }
            curr = curr.next;
        }
    }

    // Get Size

    getSize(){
        return this.size;
    }
}

const list1 = new doublyLinkedList();
list1.insertAtEnd(10);
list1.insertAtEnd(20);
list1.insertAtEnd(30);
list1.insertAtEnd(40);
list1.insertAtEnd(50);

list1.traverseForward();
list1.deleteByValue(40);
list1.traverseBackward();