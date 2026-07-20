function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  
  this.intro = function() {
    console.log(`My pet name is ${this.name}`);
  };
}

Animal.prototype.speak = function() {
  console.log(`${this.name}: ${this.sound}`);
};

let a1 = new Animal("bob", "barks");
a1.intro();
a1.speak();