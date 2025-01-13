// In JavaScript, class inheritance allows you to create a new class based on an existing class, enabling code reuse and the extension of functionality. 
// This is achieved using the extends keyword


class Parent{
  constructor(name){
    this.name = name;
  }

  greet(){
    console.log(`Hi, I'm ${this.name}`);
  }
}


class Child extends Parent{
  constructor(name, age){
    super(name);
    this.age = age;
  }

  introduce() {
    super.greet();
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const child1 = new Child("Ashray", 21);

// child1.greet();
child1.introduce();


// Static methods are inherited by subclasses but are called on the class itself, not the instance

class Parent2 {
  static sayHello() {
    console.log("Hello from Parent");
  }
}

class Child2 extends Parent2 {}

Parent2.sayHello();
Child2.sayHello();
