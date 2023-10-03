function arrangeWords(text: string): string {
    const arr = text.toLowerCase().split(' ');
    const map = {};
    for(const word of arr) {
        let wordLen = word.length;
        if(wordLen in map) {
            map[wordLen].push(word);
        }
        else
            map[wordLen] = [word];
    }
    const keys = Object.keys(map);
    keys.sort((a: any,b: any) => a - b)
    let ans = [];
    for(let key of keys) {
        ans.push(...map[key]);
    }
    ans[0] = ans[0].charAt(0).toUpperCase() + ans[0].substr(1);
    return ans.join(' ');
};
// TC O(nLogn)
// SC O(n)
