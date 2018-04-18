let dog = {
  sound: 'woof',
  talk: function(){
    console.log(this.sound);
    document.getElementById("spot").innerHTML = this.sound;
  }}


/*let talkFunction = dog.talk
let boundFunction = talkFunction.bind(dog)
talkFunction()
boundFunction()
let boundedFunction = dog.talk.bind(dog)
boundedFunction()*/

let button = document.getElementById('myButton')
button.addEventListener('click', dog.talk.bind(dog))


