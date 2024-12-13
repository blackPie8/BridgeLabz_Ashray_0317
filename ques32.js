// capitalize the first letter of each word in a text

let str = "my name is ashray stan"


function capLetter(str){

let strArr = str.split(" ")

for(let i = 0;i < strArr.length;i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join(" ")
}

let res = capLetter(str)
console.log(res)
