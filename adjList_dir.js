// Adjacency List (Directed Graph) (Non-Weighted)

class Graphs{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2){

        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);

        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2);
        }
        // if (!this.adjacencyList[v2].includes(v1)) {
        //     this.adjacencyList[v2].push(v1);
        // }
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex]){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graphs();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A","B");
g.addEdge("A","C");

console.log(g.adjacencyList);