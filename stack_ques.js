class Stack{
    constructor (){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Empty Stack"
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "Empty Stack"
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


// String Reversal using Stack


let str = "Ashray"

for(let i = 0;i < str.length;i++){
    stack.push (str[i])
}

let newStr = ""

while(!stack.isEmpty()){
    newStr += stack.pop()
}

console.log(newStr);

// console.log(stack.printStack())
