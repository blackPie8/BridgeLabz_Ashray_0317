// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// Promise Chaining 

new Promise((resolve, reject) => {
  resolve("Step 1");
})
  .then((result) => {
    console.log(result);
    return "Step 2";
  })
  .then((result) => {
    console.log(result);
    return "Step 3";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
