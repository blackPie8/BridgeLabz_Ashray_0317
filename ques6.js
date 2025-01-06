class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    add(num) {
        if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
            this.maxHeap.insert(num);
        } else {
            this.minHeap.insert(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.insert(this.maxHeap.extractMax());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extractMin());
        }
    }

    getMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.peek();
        } else {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
    }
}

class MaxHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this._heapifyUp();
    }

    extractMax() {
        if (this.isEmpty()) return null;
        const max = this.data[0];
        const last = this.data.pop();
        if (!this.isEmpty()) {
            this.data[0] = last;
            this._heapifyDown();
        }
        return max;
    }

    peek() {
        return this.isEmpty() ? null : this.data[0];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    _heapifyUp() {
        let idx = this.data.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.data[idx] <= this.data[parentIdx]) break;
            [this.data[idx], this.data[parentIdx]] = [this.data[parentIdx], this.data[idx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.data.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let largest = idx;

            if (leftIdx < length && this.data[leftIdx] > this.data[largest]) {
                largest = leftIdx;
            }
            if (rightIdx < length && this.data[rightIdx] > this.data[largest]) {
                largest = rightIdx;
            }
            if (largest === idx) break;

            [this.data[idx], this.data[largest]] = [this.data[largest], this.data[idx]];
            idx = largest;
        }
    }
}

class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this._heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) return null;
        const min = this.data[0];
        const last = this.data.pop();
        if (!this.isEmpty()) {
            this.data[0] = last;
            this._heapifyDown();
        }
        return min;
    }

    peek() {
        return this.isEmpty() ? null : this.data[0];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    _heapifyUp() {
        let idx = this.data.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.data[idx] >= this.data[parentIdx]) break;
            [this.data[idx], this.data[parentIdx]] = [this.data[parentIdx], this.data[idx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.data.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < length && this.data[leftIdx] < this.data[smallest]) {
                smallest = leftIdx;
            }
            if (rightIdx < length && this.data[rightIdx] < this.data[smallest]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;

            [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
            idx = smallest;
        }
    }
}

const medianFinder = new MedianFinder();
const stream = [6, 10, 2, 8, 4, 12];
const operations = ["add", "add", "getMedian", "add", "add", "getMedian", "add", "add", "getMedian"];

let index = 0;
for (let op of operations) {
    if (op === "add") {
        console.log(`After add(${stream[index]}):`);
        medianFinder.add(stream[index]);
        index++;
    } else if (op === "getMedian") {
        console.log(`Median = ${medianFinder.getMedian()}`);
    }
}
