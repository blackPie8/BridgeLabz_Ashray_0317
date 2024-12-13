// convert a CSV text to a “bi-dimensional” array

let csv = `
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
`

function csvToArr(csv){
    let res = []
    let arr = csv.trim().split("\n")
    for(let val of arr){
        let col = val.split(",")
        res.push(col)
    }
    return res 
}
console.log(csvToArr(csv))