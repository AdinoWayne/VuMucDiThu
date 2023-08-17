function balancedString(s: string): number {
    //charCount is for store occurence of chars in s
    let charCount = new Map();
    for (let c of s){
        let freq;
        if (charCount.has(c)){
            freq = charCount.get(c) + 1;
        }
        else{
            freq = 1;
        }
        charCount.set(c, freq);
    }
    let target = s.length / 4;
    let res = s.length;
    let left = 0;
    if (isBalanced(charCount, target)){
        return 0;
    }
    for (let i = 0; i < s.length; i++){
        charCount.set(s[i], charCount.get(s[i]) - 1); //record outside window's occurence if balanced or not
        if (isBalanced(charCount, target)){
            res = Math.min(res, i - left + 1);
            for(let j = left; j <= i; j++){//set window
                charCount.set(s[left], charCount.get(s[left]) + 1);  //will remove leftchar, mean go outside window 
                left++;
                if (isBalanced(charCount, target)){ //new window works, make outside window balance
                    res = Math.min(res, i - left + 1);
                }
                else{
                    break; //invalid window, forward right pointer
                }
            }
        }
    }
    return res;
    
};

var isBalanced = function(charCount, target){ //balanced if all chars <= n/4
    for (const [k,v] of charCount){
        if (v > target){
            return false;
        }
    }
    return true;
}
// TC O(n2)
// SC O(n)
