const arr = [1,2,3,4,5,6,7]

// arr.forEach((i)=>console.log(i)
// )

// const arr2  = arr.splice(1,2)     // splice
// console.log(arr2);
// console.log(arr);

// const arr3 = arr.slice(1,4)    // slice
// console.log(arr3);

// const ver = arr.join('-')     // join
// console.log(ver);



// arr.forEach((i)=>{           // for each
//      console.log(i)  
// })

// const newArr = arr.reverse()      // reverse
// console.log(newArr)


let nam = "Ashray"               // reverse a string
const newArr2 = nam.split("")
const newArr3 = newArr2.reverse()

let str2 = newArr3.reduce((acc,char)=>acc+char,"")
console.log(str2);


function mulTen(n){
    return n*10
}

let newArr4 = arr.map(mulTen).filter((i)=>i>=40)      // filter
console.log(newArr4);

for (const char of "hello") {
    console.log(char);  // h, e, l, l, o
  }


console.log(["hello", "world"].join(" ")); // "hello world"    // join
