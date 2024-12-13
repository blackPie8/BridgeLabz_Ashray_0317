// convert a string in an array containing the ASCII codes of each character

let str = "Ashray"

function asciiCode(str){
    let charCodeArr = []
    for(let i in str){
        charCodeArr.push(str.charCodeAt(i))
    }
    return charCodeArr
}

console.log(asciiCode(str))