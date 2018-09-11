let femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
let maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
let newName = 'Marian';

let allNames = femaleNames.concat(maleNames);
console.log(allNames);

if (allNames.indexOf(newName) === -1) {
  let addNewNameToAllNames = allNames.push('Marian');
  console.log(allNames);
}
else {
  console.log("your allNames table has a name from the newName table");
}