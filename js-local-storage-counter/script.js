localStorage.setItem('lastName', "Smith");
document.getElementById('text').innerHTML = localStorage.getItem('lastName');

let counter =()=> {
    if (localStorage.clicks) {
            localStorage.clicks = Number(localStorage.clicks)+1;
        } else {
            localStorage.clicks = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clicks + " time(s).";
}
let remove =()=> {
  localStorage.clicks = 0;
  document.getElementById("result").innerHTML = "LocalStorage has been deleted.";
}