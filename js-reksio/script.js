class Animal {  
  constructor() {}
  giveVoice() {
      console.log(`Nazywam sie ${this.name}!`);
  }
}
class Dog extends Animal {
constructor() {
  super(name);
}
giveVoice() {    
  super.giveVoice();
}
eat() {
  console.log('yummy');
}
}
const pies = new Dog('reksio');  
pies.giveVoice();