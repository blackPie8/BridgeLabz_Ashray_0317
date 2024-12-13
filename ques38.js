// convert an array containing ASCII codes in a string

let arr = [ 65, 115, 104, 114, 97, 121]

function toStr(arr){
    let str = ""
    for(let val of arr){
        str += String.fromCharCode(val)
    }
    return str
}

console.log(toStr(arr));
