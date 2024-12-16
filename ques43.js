//  extract a unidimensional array using the column specified by the number

function extractCol(matrix, colIndex){
    let colArr = []
    for(let i = 0;i < matrix.length;i++){
        colArr.push(matrix[i][2])
    }
    return colArr
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let col = 1

console.log(extractCol(matrix,col));