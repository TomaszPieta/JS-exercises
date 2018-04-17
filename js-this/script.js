let firstName = 'John';
let hobby = 'browsing the web with you';
function sayHi(){
  console.log(`Hello ${firstName}, are you into ${hobby}?`)}

const marcin = {
firstName: 'Marcin', age: 23,
hobby: 'Weights lifting'}
const sylwia = {
firstName: 'Sylwia', gender: 'female',
hobby: 'Reading books',}
sayHi();
sayHi.call(marcin);
sayHi.call(sylwia);
const sayHiToMarcin = sayHi.bind(marcin);
sayHiToMarcin();