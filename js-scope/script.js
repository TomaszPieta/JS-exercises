var pln=1534.56;
function wallet(){
  //alert('btc'); alert('eth');
  if(pln>0){
    var btc = pln/40852;
    let eth = pln/3050;
    var btc = 1000;
    eth = 500;
    document.write('BTC = '+btc+'<br>ETH = '+eth);
    console.log('BTC = '+btc+', ETH = '+eth);
  }
  else{
    document.write('Brak środków');
    console.log('Brak środków');
  }
  //alert('btc'); alert('eth');
}
wallet();
//alert('btc'); alert('eth');