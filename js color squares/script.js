function hide(){
  var sal = document.getElementById("b1").style;
  var sel = document.getElementById("1").style;
  if (sel.color == "black"){
    document.getElementById("b1").innerHTML="Pokaz";
    sel.height="0px";
    sel.padding="0";
    sel.color="transparent";
    sel.fontSize="0";
    sal.margin="0 auto";
    sal.borderTopRightRadius="0";
    sal.borderTopLeftRadius="0";
    sal.borderBottomRightRadius="5px";
    sal.borderBottomLeftRadius="5px";  
  }
  else{
    document.getElementById("b1").innerHTML="Ukryj";
    sel.height="190px";
    sel.padding="1.5em";
    sel.color="black";
    sel.fontSize="100%";
    sal.margin="-70px auto";
    sal.borderRadius="3px";
  }}