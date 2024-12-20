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

    // Insert at End

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

    // Traverse a Linked List

    traverse(){
        let curr = this.head;
        let elements = [];
        while(curr){
            elements.push(curr.value);
            curr = curr.next;
        }
        console.log(elements.join(" -> "));
    }

    // find mid of list

    midList(){

        if(!this.head) return null;
    
        let slow = this.head;
        let fast = this.head;
    
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
    
        return slow.value;
    }

    // reverse a Linked List

    revList(){
        let prev = null;
        let curr = this.head;
        let next = null;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // delete element by value

    deletebyValue(data){

        if (!this.head) return;

        if (this.head.value === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let curr = this.head;
        let prev = null;

        while(curr && curr.value !== data){
            prev = curr;
            curr = curr.next;
        }

        if(curr){
            prev.next = curr.next;
            this.size--;
        }
    }

    // Size of Linked List

    getSize(){
        return this.size;
    }
}

// list 1

let list1 = new LinkedList();
list1.insertAtEnd(1);
list1.insertAtEnd(2);
list1.insertAtEnd(3);
list1.insertAtEnd(4);
list1.insertAtEnd(5);

// list 2

let list2 = new LinkedList();
list2.insertAtEnd(3);
list2.insertAtEnd(7);
list2.insertAtEnd(4);
list2.insertAtEnd(9);
list2.insertAtEnd(1);

//  Merge Lists

function mergeTwoLL(list1, list2){
    let curr = list1.head;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = list2.head;
    list1.size += list2.size;
    list2.size = 0;
}

// Unique elements in list

function uniqueElements(list1){
    const seen = new Set();

    let curr = list1.head;

    while(curr){
        if(!seen.has(curr.value)){
            seen.add(curr.value);
        }
        curr = curr.next;
    }
    return seen;
}

mergeTwoLL(list1,list2);    // merge two lists
list1.traverse();

console.log(`Mid of List -> ${list1.midList()}`);    // mid of list
console.log(`Mid of List -> ${list2.midList()}`);

console.log(uniqueElements(list1));  // unique elements in a list


list1.revList();  // reverse a list

list1.traverse(); // print a list

list1.deletebyValue(3);   // Delete node with value 3
list1.traverse();

console.log(list1.getSize());