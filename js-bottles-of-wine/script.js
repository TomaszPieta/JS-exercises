let num = 9;

while (num >=1) {
  if (num===2) {
    let two = `<p>${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around… ${num-1} bottle of juice on the wall!</p>`;
    document.write(two);
  }
  else if(num===1) {
    let one = `<p>${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around… ${num-1} bottles of juice on the wall!</p>`;
    document.write(one);
  } else {
    let other = `<p>${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around… ${num-1} bottles of juice on the wall!</p>`;
    document.write(other);
  }
num -=1; 
}