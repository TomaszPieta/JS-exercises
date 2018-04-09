function przelicz(kwota){
    return 1.23*kwota}

var kwota = prompt("podaj wartość");

document.getElementById("span").innerHTML = "Cena po dodaniu podatku 23% wynosi " + przelicz(kwota) + " złotych.";