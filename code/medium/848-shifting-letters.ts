function shiftingLetters(s: string, shifts: number[]): string {
    let result = ''
    
    for(let i=shifts.length-2; i>=0; i--){
       shifts[i] +=  shifts[i+1];        
    }
    
    for(let i=0; i<s.length; i++){
        var shift = shifts[i] % 26;
        let shifting = s[i].charCodeAt(0)-97  + shift
        if(shifting > 25){
            shifting = shifting - 26
        }
        result +=  String.fromCharCode(shifting +97)
    }   
    return result
};

// Time complexity: O(n)
// Space complexity: O(n)
