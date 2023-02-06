function longestSubstring(s: string, k: number): number {
    let map=new Map();
    map.clear();
    for(let item of s){
        if(map.has(item))
            map.set(item,map.get(item)+1);
        else
            map.set(item,1);
    }
    for(let [item,val] of map){
        if(val<k){
            let ar=s.split(item);
            let res=0;
            for(let word of ar){
                res=Math.max(res,longestSubstring(word,k));
            }
            return res;
        }
    }
    return s.length;
};

// The time complexity of this function is O(n^2), where n is the length of the input string s.
// This is because the function has a nested loop, in which the inner loop splits the input string into substrings using the split() method, and the outer loop calls the longestSubstring() function recursively on each of these substrings.
// The split() method has a time complexity of O(n), and the number of recursive calls to the longestSubstring() function is proportional to the length of the input string, so the overall time complexity of the function is O(n^2).
