// JavaScript uses a technique called reachability-based memory management
//  to determine which objects are no longer needed and can be cleaned up

// Mark and Sweep algo implicitly frees the memory

let obj1 = { child: { name: "childObj" } }; // Reachable from the root

function example() {
  let obj2 = { key: "value" }; // Reachable during the function call
}

obj1 = null; // Now obj1 and its child are unreachable


// --------Circular Reference (Memory Leaks)

function createCircularReference() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
}


// --------Mark and Sweep -> The Mark-and-Sweep algorithm is typically implemented within JavaScript engines (e.g., V8) and isn't exposed directly to developers.