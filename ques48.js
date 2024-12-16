// return the longest word in a string

function longStr(str){
    let newArr = str.split(" ")
    let longestWord = ""
    for(let i = 0;i < newArr.length;i++){
        if(newArr[i].length > longestWord.length){
            longestWord = newArr[i]
        }
    }
    return longestWord
}


let str = "My name is Ashray and I am from Shimla."
console.log(longStr(str))