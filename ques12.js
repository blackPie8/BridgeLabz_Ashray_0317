// return arr of positive num

const arr = [0,11,-20,13,-45,23]

function posArr(array){
    let newArr = []
    for(let i of arr){
        if(i >=0 ){
            newArr.push(i)
        }
    }
    console.log(`new Positive array -> ${newArr}`);
    
}

posArr(arr)