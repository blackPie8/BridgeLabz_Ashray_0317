// --------Implicit Conversion

const obj = {
  toString() {
    return "Alice";
  }
};

console.log("Hello " + obj);


const numObj2 = {
  valueOf() {
    return 42;
  }
};

console.log(numObj2 + 10);
console.log(numObj2 * 2);


// --------toString() Method

const obj2 = { name: "Alice" };

console.log(obj2.toString());  // returns String like [object Object]


// ---------valueOf() Method

const numObj = {
  valueOf() {
    return 42;
  }
};

console.log(numObj + 10); // Logs: 52 (because valueOf() is called)


// ----------Symbol.toPrimitive() Method - To control how an object is converted to a primitive in different contexts, JavaScript provides a special method: Symbol.toPrimitive

const obj3 = {
  name: "Ashray",
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Name: ${this.name}`;
    } else if (hint === "number") {
      return 100;
    }
    return "Unknown";
  }
};

console.log(String(obj3));
console.log(+obj3);
console.log(obj3 + "");
