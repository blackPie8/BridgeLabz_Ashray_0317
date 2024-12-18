class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    insertAtBeginning(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    insertAtEnd(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }
        else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
            this.size++
        }
    }

    insertAtPosition(data,position){
        if(position < 0 || position >= this.size){
                return "Invalid Index"
        }
        if(position === 0){
            this.insertAtBeginning(data)
        }
        else{
            const newNode = new Node(data)
            let curr = this.head
            let idx = 0
            while(idx < position - 1){
                curr = curr.next
                idx++
            }
            newNode.next = curr.next
            curr.next = newNode
            this.size++
        }
    }

        traverse() {
            let current = this.head
            let elements = []
            while (current) {
              elements.push(current.value)
              current = current.next
            }
            console.log(elements.join(' -> '))
          }
          
        getSize(){
            return this.size
        }
    }

const list = new LinkedList()
list.insertAtBeginning(10)
list.insertAtEnd(20)
list.insertAtEnd(30)
list.insertAtPosition(15, 1)
list.traverse()
console.log(list.getSize())