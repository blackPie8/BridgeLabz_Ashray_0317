// callback fn() - A callback is a function passed as an argument to another function, which is executed after the completion of that function's task.


function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);

// Microtasks - Microtasks are a type of asynchronous task that has higher priority than regular tasks (macrotasks).
// They are executed immediately after the current execution context, before any other tasks in the callback queue.

console.log("Script start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

console.log("Script end");
