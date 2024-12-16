// calculate the distance between two points defined by their x, y coordinates

function calculateDist(x1, y1, x2, y2){
    let dx = x2 - x1
    let dy = y2 - y1

        return Math.sqrt((dx*dx)+(dy*dy))

}

let x1 = 1
let x2 = 4
let y1 = 2
let y2 = 6

console.log(calculateDist(x1, y1, x2, y2))