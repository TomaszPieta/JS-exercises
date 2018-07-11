function solution(A) {
    let zen =  Math.floor(Math.random()*6);
    let ten = A[zen]*A[zen]*A[zen];
    let men = ten.toString();    
    let find = men.replace('1', '');
    let ans = parseInt(find);
    console.log(men);
    console.log(find);    
    console.log(ans);
}
let A = [25, 10, 25, 10, 32];
let B = [7, 15, 6, 20, 5, 10]
solution(A);
solution(B);