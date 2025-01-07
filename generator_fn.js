// Iterable and Iterator

// An iterable is any object that implements the Symbol.iterator method, which returns an iterator.

// Generator fn()s

// Generator functions in JavaScript are a special type of function that allow you to pause and resume 
// execution.
// They are used to create iterators, making them powerful tools for managing asynchronous tasks, lazy 
// evaluations, or working with potentially large data sets.

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());