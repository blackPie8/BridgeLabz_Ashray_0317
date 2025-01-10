// Optional Chaining


const user = { profile: { name: "Alice" } };
console.log(user.profile?.name);
console.log(user.address?.city);

const user2 = { profile: { name: "Alice" }, age: 21 };
console.log(user2.profile.name);
console.log(user2.address?.city); // Throws: TypeError


// Accessing Array Elements


const users = [{ name: "$tan" }, null, { name: "$" }];

console.log(users[0]?.name);
console.log(users[1]?.name);
console.log(users[3]?.name);


// Accessing Dynamic Properties


const user3 = { profile: { age: 25 } };
const key = "profile";

console.log(user3[key]?.age);
console.log(user3["nonExistentKey"]?.age);