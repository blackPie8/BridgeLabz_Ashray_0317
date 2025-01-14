// async and await are modern JavaScript features that simplify working with asynchronous code by providing a more synchronous and readable syntax for handling promises.

//  By enabling a synchronous-like syntax for asynchronous code, they enhance readability, reduce complexity, and make error handling easier.


async function fetchData() {
  const data = await Promise.resolve("Hello, async/await!");
  console.log(data);
}

fetchData();


// Error Handling with async/await


async function processTask() {
  try {
    const result = await Promise.reject("Something went wrong!");
    console.log(result);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

processTask();


// Parallel Execution

async function fetchInParallel() {
  const promises = [
    Promise.resolve("First Result"),
    Promise.resolve("Second Result"),
    Promise.resolve("Third Result")
  ];

  const results = await Promise.all(promises);
  console.log(results);
}

fetchInParallel();

// Async Iteration

// Async iteration is a way to loop over asynchronous data sources, like promises or streams, using the for await...of syntax.

// Async Generator

// An async generator is a function that can yield promises using the yield keyword and await. 
// It combines the concepts of generators and async/await, allowing you to create custom async iterables.

// Use Cases: Streaming data, paginated APIs, live data processing.