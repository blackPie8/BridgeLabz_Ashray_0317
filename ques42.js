// return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function intersectingCircles(x1,y1,r1,x2,y2,r2){
    let dx = x2 - x1
    let dy = y2 - y1

    const val = Math.sqrt((dx*dx)+(dy*dy))

    return val <= (r1+r2)
}

let x1 = 1, y1 = 2, r1 = 2.4
let x2 = 4, y2 = 6, r2 = 2.5

let result = intersectingCircles(x1,y1,r1,x2,y2,r2)
console.log(result);
