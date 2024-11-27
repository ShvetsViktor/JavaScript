const person = {
    name: "Peter",
    age: 29,
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person.greet();  // Выведет: "Hello, my name is Peter"
  
