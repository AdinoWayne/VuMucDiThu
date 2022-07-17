function getLucky(s: string, k: number): string {
    let alpha = '-abcdefghijklmnopqrstuvwxyz';
    let res = ''
    for(let c of s) {
        res += alpha.indexOf(c)
    }
    
    while(k--) {
        let sum = 0;
        for(let c of res) {
            sum += +c;
        }
        res = sum.toString();
    }
    return res; 
};
