let box = document.querySelector('.add');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.list li');

let add = (i) => {for(let i = 10; i < 100; i++){
    let item = document.createElement('li');
    item.innerHTML = 'box '+i;
    list.appendChild(item);}}

list.addEventListener('click', add);
box.addEventListener('click', add);

/*
let plus = (i) => {let numbers = [];
    for(i=0;i<100;i++){
    let number = function(){
      numbers.push(number);}
      return numbers;};}

function makeArmy() {
  let shooters = [];
   {let shooter = function() { 
      alert( i );};
    shooters.push(shooter);}
  return shooters;}*/

