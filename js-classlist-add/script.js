let ten = document.getElementById("klasa");

let mOver = () => {
  ten.innerHTML = "O to chodziło";
  ten.classList.add("green");
  ten.classList.remove("green");}

let mOut = () => {
  ten.innerHTML = "Najedz mnie myszka";
  ten.classList.remove("green");}