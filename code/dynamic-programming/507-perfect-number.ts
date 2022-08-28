function checkPerfectNumber(num: number): boolean {
    if (num <= 1) { return false; }
    let divisorsSum = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i ===0) {
            divisorsSum += i + num / i;
        }
    }
    
    return divisorsSum === 2 * num ? true : false;
};
