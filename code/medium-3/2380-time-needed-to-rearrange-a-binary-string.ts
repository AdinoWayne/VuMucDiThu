function secondsToRemoveOccurrences(s: string): number {
    let cnt = -1
    
    function count(s){
        cnt++
        let str = ""
        let isvalid = true
        for(let i=0; i<s.length; i++){
            if(i < s.length-1 && s[i] < s[i+1]){
                isvalid = false
                str += s[i+1]
                str += s[i]
                i++;
            }else if(i < s.length){
                str += s[i];
            }
        }
        return isvalid == true ? cnt : count(str);
    }
    
    return count(s)
};
// Time Complexity O(2^n)
// Space Complexity O(2^n)
