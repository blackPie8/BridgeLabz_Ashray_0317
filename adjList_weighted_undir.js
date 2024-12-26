// Adjacency List (Weighted Graph) (Undirected Graph)

class WeightedGraph{

    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight){

        if(!this.adjacencyList[v1]) this.addVertex(v1);
        if(!this.adjacencyList[v2]) this.addVertex(v2);

        this.adjacencyList[v1].push({node : v2, weight});
        this.adjacencyList[v2].push({node : v1, weight});     // undirected cond
    }

    removeEdge(v1, v2){
        if(this.adjacencyList[v1]){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2);
        }

        if(this.adjacencyList[v2]){
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v.node !== v1);
        }
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex] && this.adjacencyList[vertex].length > 0){
            const adjacentVertex = this.adjacencyList[vertex].pop().node;
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    printGraph(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,"->",this.adjacencyList[vertex]);
        }
    }
}


const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A","B",4);
graph.addEdge("A","C",3);

graph.printGraph();

graph.removeEdge("A", "C");
graph.printGraph();

graph.removeVertex("D");
graph.printGraph();
