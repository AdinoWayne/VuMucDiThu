function smallestRepunitDivByK(k: number): number {
    let count = 1
    let start = 1
    let set = new Set()
    while (start) {
        let r = start % k
        if ( r === 0 ) {
            break
        }
        if ( set.has(r) === true ) {
            return -1
        } else {
            set.add(r)
            start = r * 10 + 1
            count++
        }
        
    }
    return count
};

// N next = (N * 10) + 1 : the next value of N 1 -> 11 -> 111 ...
// remainder = N%K : the remainder

// (N next)%K = ((N * 10) + 1)%K : we can mod both sides of our next remainder equation
// (N next)%K = ((N * 10)%K + 1%K)%K : the equation can then be rearranged. "It is useful to know that modulos can be taken anywhere in the calculation if it involves only addition and multiplication." - duke-cps102
// (N next)%K = ((N * 10)%K + 1)%K : 1 mod anything is 1
// (N next)%K = ((N * 10)%K + 1)%K : 1 mod anything is 1
// remainder next = (remainder*10 + 1) %K : knowing that N%K is our remainder, we have now have a general equation that can find our next remainder value without knowing the value of N.
// TC O(n)
// SC O(n)
