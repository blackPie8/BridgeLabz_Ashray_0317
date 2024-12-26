// Adjacency List (Weighted Graph) (Directed Graph)

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
    }

    removeEdge(v1, v2){
        if(this.adjacencyList[v1]){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2);
        }
    }

    removeVertex(vertex){
        for(let v in this.adjacencyList){
            this.adjacencyList[v] = this.adjacencyList[v].filter(edge => edge.node !== vertex);
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