// DFS - Based Approach

function topologicalSortDFS(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);

        for (const neighbor of graph[node] || []) {
            dfs(neighbor);
        }
        stack.push(node);
    }

    for (const node in graph) {
        dfs(node);
    }

    return stack.reverse();
}


const graphDFS = {
    1: [2, 3],
    2: [4],
    3: [4],
    4: []
};

console.log("Topological Order (DFS):", topologicalSortDFS(graphDFS));



// Kahn's Algorithm


// function topologicalSortKahn(graph) {
//     const inDegree = {};
//     const queue = [];
//     const topologicalOrder = [];

//     for (const node in graph) {
//         inDegree[node] = 0;
//     }
//     for (const node in graph) {
//         for (const neighbor of graph[node]) {
//             inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
//         }
//     }

//     for (const node in inDegree) {
//         if (inDegree[node] === 0) {
//             queue.push(node);
//         }
//     }

//     while (queue.length > 0) {
//         const node = queue.shift();
//         topologicalOrder.push(node);

//         for (const neighbor of graph[node] || []) {
//             inDegree[neighbor]--;
//             if (inDegree[neighbor] === 0) {
//                 queue.push(neighbor);
//             }
//         }
//     }

//     if (topologicalOrder.length !== Object.keys(graph).length) {
//         throw new Error("The graph contains a cycle!");
//     }

//     return topologicalOrder;
// }

// const graphKahn = {
//     1: [2, 3],
//     2: [4],
//     3: [4],
//     4: []
// };

// console.log("Topological Order (Kahn):", topologicalSortKahn(graphKahn));

