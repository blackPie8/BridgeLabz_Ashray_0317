class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(vertex, distance) {
        this.queue.push({ vertex, distance });
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, source) {
    const distances = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[source] = 0;

    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
        const { vertex, distance } = pq.dequeue();

        if (visited.has(vertex)) continue;
        visited.add(vertex);

        for (let [neighbor, weight] of graph[vertex]) {
            const newDistance = distance + weight;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

const graph = {
    1: [[2, 4], [3, 2]],
    2: [[4, 7], [5, 1]],
    3: [[6, 5]],
    4: [],
    5: [[6, 3]],
    6: []
};

const source = 1;
const shortestPaths = dijkstra(graph, source);

console.log("Shortest Path from Source:", shortestPaths);
