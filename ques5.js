class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function detectAndRemoveLoop(head) {
    if (!head || !head.next) {
        return;
    }

    let slow = head;
    let fast = head;


    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            removeLoop(slow, head);
            return;
        }
    }
}

function removeLoop(loopNode, head) {
    let ptr1 = head;
    let ptr2 = loopNode;


    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    while (ptr2.next !== ptr1) {
        ptr2 = ptr2.next;
    }

    ptr2.next = null;
}


function createLinkedListWithLoop(values, loopStartIndex) {
    const nodes = values.map(value => new ListNode(value));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (loopStartIndex >= 0) {
        nodes[nodes.length - 1].next = nodes[loopStartIndex];
    }
    return nodes[0];
}

function printLinkedList(head) {
    const visited = new Set();
    let current = head;
    while (current) {
        if (visited.has(current)) {
            console.log("Loop detected!");
            return;
        }
        visited.add(current);
        process.stdout.write(`${current.value} -> `);
        current = current.next;
    }
    console.log("NULL");
}

const head = createLinkedListWithLoop([1, 2, 3, 4, 5], 2);
console.log("Before removing loop:");
printLinkedList(head);

detectAndRemoveLoop(head);

console.log("\nAfter removing loop:");
printLinkedList(head);
