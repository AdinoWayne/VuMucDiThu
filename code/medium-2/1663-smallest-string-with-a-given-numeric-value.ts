function getSmallestString(n: number, k: number): string {
    if (n <= 0 || k <= 0) {
        return '';
    }
       
    /* Refer comment#1 for this logic */
    let highestCharFreq = Math.floor(k / (TO_ADD + n));
    let i = 0;          
    
    while(highestCharFreq === 0 && i <= TO_ADD) {
        i++;
        highestCharFreq = Math.floor(k / (TO_ADD + n - i))        
    }
    
    const highestCharCode = TO_ADD - i;
    const highestChar = String.fromCharCode(97 + highestCharCode);
    const newK = k - highestCharFreq * (highestCharCode + 1);
    const newN = n - highestCharFreq;
       
    
    
    const output = `${getSmallestString(newN, newK)}${highestChar.repeat(highestCharFreq)}`;    
    return output;
};
const TO_ADD = 26 - 1;
