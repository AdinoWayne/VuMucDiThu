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
