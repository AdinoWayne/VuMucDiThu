function divisorSubstrings(numInt: number, k: number): number {
    let num:string = ''+ numInt
    let val = 0;
    let res = 0
    for(let q=0;q<=num.length-k;q++){
        val=+ num.substring(q,q+k)
        if(val != 0 && +num % val == 0)res++
    }
    return res
};
