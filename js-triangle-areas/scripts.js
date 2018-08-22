function getTriangleArea(a, h) {
  let triangleArea = (a * h)/2;
  if (a>0 && h>0) {
    return triangleArea;
  }
  else {
    return 'incorrect data';
  }
}

console.log(getTriangleArea(10, 6));

let firstTraingleArea = getTriangleArea(-5, -8);
let secondTriangleArea = getTriangleArea(0, -2);
let thirdTriangleArea = getTriangleArea(10, -2);

console.log(firstTraingleArea);
console.log(secondTriangleArea);
console.log(thirdTriangleArea);
