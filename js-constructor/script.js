class Animal{
    constructor(name, color, sound){
      this.name = name;
      this.color = color;
      this.sound = sound;  }
    description(){
      console.log(`This is ${this.color} ${this.name} that ${this.sound}s`);  }}
  
  class Dog extends Animal{
    constructor(name, color, sound, age){
      super(name, color, sound);
      this.age = age;  }
    description(){
      console.log(`${this.name} is ${this.age} years old ${this.color} dog that ${this.sound}s`);  }}
  
  const cat = new Animal("Filemon", "black", "meow");
  cat.description();
  const canary = new Animal("Suzie", "yellow", "sing");
  canary.description();
  const dog = new Animal("Burek", "brown", "bark");
  dog.description();
  const burek = new Dog("Szarik", "grey", "bark", "8");
  burek.description();