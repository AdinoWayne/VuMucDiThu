function primePalindrome(n: number): number {
    let i ;
    if (n == 1 || n ==2) return 2;
    if(n%2 == 0) i = n+1;
    else         i=n;
    while (true) {
        if ( isPalind(i) && isPrime(i) ) {
            return i;
        }
        i+=2
        if(i > 1e7 && i < 1e8) i = 1e8 + 1;
        if(i > 1e5 && i < 1e6) i = 1e6 + 1;
        if(i > 1e3 && i < 1e4) i = 1e4 + 1;
        if(i > 11 && i < 100) i = 101;
    }
    return -1;
};//9989900



function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function isPalind(n){
    return  n.toString() === n.toString().split("").reverse().join("");
}
