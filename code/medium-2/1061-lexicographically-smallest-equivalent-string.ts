function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const link = {};
    const find = (a)=>{
        if(link[a] == null) link[a] = a;
        while(link[a] != a){
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    }
    const union = (a, b)=>{
        a = find(a);
        b = find(b);
        if(a > b){
            let temp = b;
            b = a;
            a = temp;
        }
        link[b] = a;
    }
    for(let i = 0; i < s1.length; i++){
        union(s1[i], s2[i]);
    }

    let ans = "";
    for(const a of baseStr){
        ans+=find(a);
    }
    return ans;
};
// TC O(alpha(n)) alpha(n) is the inverse Ackermann function which grows very slowly and is less than 5 for all practical values of n
// SC O(n)
