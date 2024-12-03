const prompt = require('prompt-sync')({ sigint: true });

function findMagicNumber(){

    console.log("Think of a number between 1 and 100")

    let low = 1
    let high = 100

    while(low < high){
        let mid = Math.floor((low+high)/2)

        let response = prompt(`Is your number less than or equal to ${mid}? (yes/no) `);

        if(response.toLowerCase()==="yes"){
            high = mid
        }
        else if(response.toLowerCase()==="no"){
            low = mid + 1
        }
        else{
            console.log("Please answer with 'yes' or 'no'.")
        }
    }
    console.log(`The magic number is ${low}!`);
    
}
findMagicNumber()
