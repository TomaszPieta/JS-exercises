function licz(formularz){
  var one=formularz.a.value;
  var two=formularz.b.value;
  if(formularz.a.value == "" || formularz.b.value == ""){alert("wprowadz dane")}
  else{formularz.pole.value = one*two;
      formularz.obwod.value= 2*one+2*two}}