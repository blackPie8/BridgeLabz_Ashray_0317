// Stacks in JS

// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle
// Time Complexity - O(1)

class Stack{

    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Empty Stack nothing to delete"
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    printStack(){
        return this.items.join(" ")
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)


console.log(stack.printStack()) // 10 20 30 40 50
console.log(stack.size())       // 5
console.log(stack.isEmpty())    // false
console.log(stack.peek())       // 50
console.log(stack.pop())        // pops 50
console.log(stack.peek())       // 40