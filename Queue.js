class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Empty Queue"
        }
        return this.items.shift()
    }

    peek(){
        if(this.isEmpty){
            return "Empty Queue"
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    printQueue(){
        return this.items.join(" ")
    }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()

console.log(queue.printQueue())