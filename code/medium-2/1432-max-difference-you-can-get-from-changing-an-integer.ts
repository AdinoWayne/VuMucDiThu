function maxDiff(num: number): number {
    let numString = num.toString();
    let max = numString;
    let min = numString;
    let digits = numString.split("");
    let firstDigit: any = digits[0];

    
    //max
    if(firstDigit != 9) {
        max = max.replaceAll(digits[0],"9");
    }
    console.log(max);

    //min
    if(firstDigit != 1) {
        min = min.replaceAll(digits[0],"1");
    }
    
    for(let i = 1; i < digits.length; i++) {
        if(Number(max) == num) {
            max = max.replaceAll(digits[i],"9");
        }        

        if(Number(min) == num) {
            if(firstDigit == digits[i]) continue;
            min = min.replaceAll(digits[i],"0");
        }
        
        if(Number(max) != num && Number(min) != num) break;
    }
    
    return Number(max) - Number(min);
};
