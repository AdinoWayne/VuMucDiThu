function closeStrings(word1: string, word2: string): boolean {
    if(word1.length != word2.length) return false;
    
    let oneMap = {}
    let twoMap = {}
    
    for(let i= 0; i<word1.length;i++){
        oneMap[word1[i]] = oneMap[word1[i]] ? oneMap[word1[i]]+1 :1;
        twoMap[word2[i]] = twoMap[word2[i]] ? twoMap[word2[i]]+1 :1;
    }
    let arr =Object.values(twoMap);
    for(let i in oneMap){
        if(!twoMap[i]) return false;
        let index = arr.indexOf(oneMap[i])
        if(index ==-1) return false;
        arr.splice(index,1)
    }

    return arr.length == 0
};
