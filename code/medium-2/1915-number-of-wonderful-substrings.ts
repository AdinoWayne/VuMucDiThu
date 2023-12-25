function wonderfulSubstrings(word: string): number {
let hashMap={},ans=0,binaryRepresentation=0,t,pos,number,oneBitToggled;
    hashMap[0]=1;
    for(let i=0;i<word.length;i++){
        pos = word[i].charCodeAt(0)-"a".charCodeAt(0);
        t = (1 << pos);
        binaryRepresentation = (binaryRepresentation^t);
        for(let i=0;i<10;i++){
            number = (1<<i);
            oneBitToggled = (binaryRepresentation^number);
            if(hashMap[oneBitToggled]!==undefined){
                ans += hashMap[oneBitToggled];
            }
        }
        if(hashMap[binaryRepresentation]===undefined){
            hashMap[binaryRepresentation]=1;
        }else{
            ans += hashMap[binaryRepresentation];
            hashMap[binaryRepresentation]++;
        }
    }
    return ans;
};
// TC O(n * 2 ^ m)
// SC O(2 ^ m)
