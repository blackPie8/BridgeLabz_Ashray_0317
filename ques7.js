class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findLCA(root, p, q) {

    if (!root) return null;
    if (root === p || root === q) return root;

    const left = findLCA(root.left, p, q);
    const right = findLCA(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
}

function buildTree() {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    return root;
}

const root = buildTree();
const node1 = root.left;
const node2 = root.right;

const lca = findLCA(root, node1, node2);
console.log(`LCA of nodes ${node1.value} and ${node2.value}: ${lca.value}`);
