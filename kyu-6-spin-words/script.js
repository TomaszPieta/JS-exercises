function spinWord(word){
  let letters = word.split(' ');
  let sentence = [];
  letters.map((letter)=>{
    if (letter.length>4){
    list = letter.split('').reverse().join('');
      sentence.push(list);
  } else {
  sentence.push(letter);}
  return sentence.join('');
  console.log(sentence);
  });  
}
spinWord('moje paranoje swoje');