// Searching in Array

// 1) indexOf()

let arr = [31,45,65,23,12,34]

let index = arr.indexOf(12)
console.log(index)


// 2) includes() 

let foundOne = arr.includes(30)
console.log(foundOne)


// 3) find() -> Returns the first element that satisfies the provided testing function

let foundTwo = arr.find(element => element > 31)
console.log(foundTwo)


// 4) findIndex() -> Returns the index of the first element that satisfies the provided testing function

let foundThree = arr.findIndex(element=>element>31)
console.log(foundThree);


// 5) some() ->  Checks if at least one element in the array satisfies the provided testing function

let exists = arr.some(element => element < 12)
console.log(exists)


// 6) every() -> Checks if every element in the array satisfies the provided testing function

let allGreaterThan11 = arr.every(element => element > 11);
console.log(allGreaterThan11)

// 7) forEach()

let found = false
arr.forEach(element => {
    if (element === 12) {
        found = true
    }
})
console.log(found)