// A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value


const promise = new Promise((resolve, reject)=>{

  const success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });


// Promise API 

  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);
  
  Promise.all([p1, p2, p3]).then(values => console.log(values));
  
  const p4 = Promise.reject("Error!");
  Promise.all([p1, p4, p3]).catch(error => console.error(error));


// Error handling in promises

  const myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
  
  myPromise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log("Cleanup actions completed");
    });

// Errors in Async Code    

const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async error occurred");
  }, 1000);
});

asyncPromise.catch(error => console.error(error));