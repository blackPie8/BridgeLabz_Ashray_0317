// frequency of letters inside a string

function freqArr(str){
    let res = []
    let map = new Map()

    for(let i = 0;i < str.length;i++){
        let char = str[i].toLowerCase()
        if(char >= 'a' && char <= 'z'){
            if(map.has(char)){
                map.set(char,map.get(char) +1)
            }
            else{
                map.set(char,1)
            }
        }
    }

    for(let [key,values] of map.entries()){
        res.push([key,values])
    }

    return res
}

let str = "Ashray Stan"
console.log(freqArr(str))
