let arr = [1,2,4,4,76,4,5,2,1]

let seen = new Set()
let duplicate = new Set()

for(const i of arr){
    if(seen.has(i)){
        duplicate.add(i)
    }
    else{
        seen.add(i)
    }
}
// console.log(seen);
console.log(duplicate);


