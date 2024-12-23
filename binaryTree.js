class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(currNode, newNode){
        if(currNode.left === null)
            currNode.left = newNode;

        else if(currNode.right === null){
            currNode.right = newNode;
        }

        else{
            this.insertNode(currNode.left, newNode);
        }
    }

    // level-order traversal

    levelOrderTraversal(){
        if(this.root === null) return;

        let uwu = [];
        uwu.push(this.root);

        while(uwu.length > 0){
            let currNode = uwu.shift();
            console.log(currNode.value);

            if(currNode.left !== null) uwu.push(currNode.left);
            if(currNode.right !== null) uwu.push(currNode.right);
        }
    }

    // pre-order traversal

    preOrderTraversal(node = this.root){
        if(node === null) return;
        console.log(node.value);

        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    // in-order traversal

    inOrderTraversal(node = this.root){
        if(node === null) return;
        this.inOrderTraversal(node.left);

        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    postOrderTraversal(node = this.root){
        if(node === null) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);

        console.log(node.value)
    }
}

let tree = new BinaryTree();

tree.insert(8);
tree.insert(9);
tree.insert(3);
tree.insert(5);
tree.insert(1);

tree.levelOrderTraversal();
// tree.preOrderTraversal();
// tree.inOrderTraversal();
// tree.postOrderTraversal();