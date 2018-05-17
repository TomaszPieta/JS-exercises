function num(number){
  let num = number.toString();
  let phone = `(${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;
  console.log(phone);
}
num(1234567890);