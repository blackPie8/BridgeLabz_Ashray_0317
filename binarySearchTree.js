// Binary Search Tree

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return;
        } 
        this.insertNode(this.root, newNode);
    }


    insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

    search(value){
        return this.searchNode(this.root,value);
    }

    searchNode(currNode,value){
        if (currNode === null) return false;
        if(value === currNode.value) return true;

        if(value < currNode.value){
            return this.searchNode(currNode.left,value);
        } else{
            return this.searchNode(currNode.right,value);
        }
    }

    inOrderTraversal(node = this.root){
        if(node === null) return;

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    preOrderTraversal(node = this.root){
        if(node === null) return;

        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    postOrderTraversal(node = this.root){
        if(node === null) return;

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }

    findMin(){
        let curr = this.root;
        while(curr.left !== null){
            curr = curr.left;
        }
        return curr.value;
    }

    findMax(){
        let curr = this.root;
        while(curr.right !== null){
            curr = curr.right;
        }
        return curr.value;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log('In-order Traversal:');
bst.inOrderTraversal();

console.log('Search for 7:', bst.search(7));
console.log('Search for 25:', bst.search(25));

console.log('Pre-order Traversal:');
bst.preOrderTraversal();

console.log('Post-order Traversal:');
bst.postOrderTraversal();

console.log('Minimum value:', bst.findMin());
console.log('Maximum value:', bst.findMax());