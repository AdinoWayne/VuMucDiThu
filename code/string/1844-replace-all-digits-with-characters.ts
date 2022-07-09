function replaceDigits(s: string): string {
    let newStr = ''
    for(let i = 1; i < s.length; i = i+2){    
        newStr += s[i-1]
        newStr += shift(s[i-1], s[i])        
    }
    if (s.length % 2) newStr += s[s.length - 1];
    return newStr
};

function shift(char, num){
    let asciiVal = char.charCodeAt()
    // add number to value 
    asciiVal = asciiVal + Number(num)
    return String.fromCharCode(asciiVal)
}
