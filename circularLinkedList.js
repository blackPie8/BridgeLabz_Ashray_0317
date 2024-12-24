class Node{
    constructor(value){
    this.value = value;
    this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.tail.next = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    delete(value){
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }

        if (this.head.value === value) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
            return;
        }

        let currentNode = this.head;
        let previousNode = null;

        do {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next;
                if (currentNode === this.tail) {

                    this.tail = previousNode;
                }
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        } while (currentNode !== this.head);

        console.log(`Value ${value} not found in the list.`);
    }

    printList() {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }

        let currentNode = this.head;

        do {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        } while (currentNode !== this.head);
    }
}


const cll = new CircularLinkedList();

cll.append(10);
cll.append(20);
cll.append(30);
cll.append(40);

cll.delete(20);
// cll.delete(25);

cll.printList();