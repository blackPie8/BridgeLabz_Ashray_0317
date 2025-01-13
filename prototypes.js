// Prototypes in JavaScript are a mechanism that allows objects to inherit properties and methods from other objects
// Prototypes enable inheritance, allowing objects to share behavior and properties


const animal = {
  eats: true,
  walk(){
    console.log("The animal is walking");
  }
};

const dog = {
  barks: true
};

Object.setPrototypeOf(dog, animal);
console.log(dog.eats);
dog.walk();


//  Using Object Literals

const cat = Object.create(animal);
cat.meow = true;

console.log(cat.eats);


// Using Constructor Functions

function car(name){
  this.name = name;
}

car.prototype.moves = true;
car.prototype.seats = function(){
  console.log(`${this.name} has 2 seats`);
};

const porsche = new car("Porsche");
console.log(porsche.moves);
porsche.seats();

console.log(Object.getPrototypeOf(dog));


// -------Prototype Chain Example

const grandparent = { hasHouse: true };
const parent = Object.create(grandparent);
parent.hasCar = true;

const child = Object.create(parent);
child.hasBike = true;

console.log(child.hasBike);
console.log(child.hasCar);
console.log(child.hasHouse);
console.log(child.toString); // Inherited from Object.prototype