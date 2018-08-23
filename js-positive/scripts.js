function myFunction() {
  let a = prompt('write value a');
  let b = prompt('write value b');
  let value =(a*a)-(2*a*b)-(b*b);

  if ((a != null) && (b != null)) {
    if(value>0) {
      document.getElementById("demo").innerHTML='This phrase (a^2)-2ab-(b^2) is equal to: '+ value + '. The result is positive';
      console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result and is positive.');
    }
    else if(value<0) {
      document.getElementById("demo").innerHTML='This phrase (a^2)-2ab-(b^2) is equal to: '+ value + '. The result is negative';
      console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result is negative');
    }
    else {
      document.getElementById("demo").innerHTML='This phrase (a^2)-2ab-(b^2) is equal zero: ' + value;
      console.log('This value:(a^2)-2ab-(b^2) is is equal to: '+ value + '. The result is zero');
    }
  }
  else {
    document.getElementById("demo").innerHTML='no valid entered value b or/and a';
    console.log('no valid entered value b or/and a');
  }
}

document.getElementById("value").addEventListener("click",myFunction);
