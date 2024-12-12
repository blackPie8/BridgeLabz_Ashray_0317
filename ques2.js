// odd numbers less than 100

function oddNum(){

    for(let i = 1; i <= 100;i++){
        if(i%2===0){
            continue
        }
        console.log(i)
    }
}

oddNum()
