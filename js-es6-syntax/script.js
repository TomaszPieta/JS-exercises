// 1. The combination of two strings using the + operator is a very easy task.
// Another way is to use the concat or join method, but what if we could not use
// any of these options? Your task will be to create two variables with Hello and
// World values, and then combine them with a method other than those mentioned above.
const firstWord = 'Hello';
const secondWord = 'World';
const sumStrings = `${firstWord} ${secondWord}`;
console.log(sumStrings);
// or
const sumStrings = (firstWord = 'Hello', secondWord = 'World') => 
console.log(`${firstWord} ${secondWord}`);
sumStrings();
// 2. Create a multiply function that will return the result of the multiplication
// operation of two values a and b. We want the result of such a call to be also
// correct - you can assume that if the user does not provide any parameter,
// it is to be replaced 1. Do not use conditional instructions !
const multiply = (multi1 , multi2 = 1) => console.log(multi1 * multi2);
multiply(5);
multiply(2,5);
multiply(6,6);
// 3. Write an average function that calculates the arithmetic mean of all arguments
// that will be passed to it. Assume that the arguments will always be numbers
const average = (...num) => console.log( num.reduce( (a, b) => a + b ) / num.length );
average(1);
average(1, 3);
average(1, 3, 6, 6);
// [1, 4, 'Iwona', false, 'Nowak']. Your task is to use destructuring to get
// the firstname and lastname variables from the array.
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,name, ,surname] = array;
const fullName = `${name} ${surname}`
console.log(fullName);