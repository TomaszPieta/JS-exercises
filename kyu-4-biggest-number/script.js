function alfa(word){
    let spell = word.toString().split('').sort((a, b) => b-a).join('');
    (spell==word) ? (console.log(-1)) : (console.log(spell));
    }
    alfa(2017);