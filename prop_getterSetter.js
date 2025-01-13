// Property Getter and Setter

// Getters and setters allow you to define custom behavior for reading and writing properties.

const person = {
  firstName: "Ashray",
  lastName: "Stan"
}

Object.defineProperty(person, "fullName",{
  get(){
    return `${this.firstName} ${this.lastName}`
  },
  set(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});

console.log(person.fullName);

person.fullName = "Bruce Wayne";
console.log(person.firstName);
console.log(person.lastName);
