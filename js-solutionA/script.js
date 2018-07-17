function solution(A) {
    A = A.toString();
    let ln = A.length;
    let a1 = A[0];
    let a2 = A[A.length-1];
    let a3 = A[1];
    let a4 = A[A.length-2];
    let a5 = A[2];
    let a6 = A[A.length-3];
    let a7 = A[3];
    let a8 = A[A.length-4];
    let a9 = A[4];
    let result = null;
    if(ln===9){
        result = parseInt(`${a1}${a2}${a3}${a4}${a5}${a6}${a7}${a8}${a9}`);        
    } else if(ln===8){
        result = parseInt(`${a1}${a2}${a3}${a4}${a5}${a6}${a7}${a8}`);        
    } else if(ln===7){
        result = parseInt(`${a1}${a2}${a3}${a4}${a5}${a6}${a7}`);
    } else if(ln===6){
        result = parseInt(`${a1}${a2}${a3}${a4}${a5}${a6}`);
    } else if(ln===5){
       result = parseInt(`${a1}${a2}${a3}${a4}${a5}`);
    } else if(ln===4){
        result = parseInt(`${a1}${a2}${a3}${a4}`);
    } else if(ln===3){
        result = parseInt(`${a1}${a2}${a3}`);
    } else if(ln===2){
        result = parseInt(`${a1}${a2}`);
    } else if(ln===1){
        result = parseInt(`${a1}`);
    } else {
        return null;
    }
    console.log(result);
}
solution(123456789);