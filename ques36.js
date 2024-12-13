// converts a string to an array of characters

let str = "Ashray"

function charArr(str){
    let newArr = []
    for(let val of str){
        newArr.push(val)
    }
    return newArr
}

console.log(charArr(str));
