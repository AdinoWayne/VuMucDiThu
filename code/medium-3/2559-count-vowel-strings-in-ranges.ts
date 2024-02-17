function vowelStrings(words: string[], queries: number[][]): number[] {
let pref = new Array(words.length+1).fill(0);
    let i=0;
    for(let x of words){
        pref[i+1]=pref[i]+(isVowel(x[0]) && isVowel(x[x.length-1]));
        i++;
    }
    let ans = [];
    for (let i = 0; i < queries.length; i++) {
        ans.push(pref[queries[i][1] + 1] - pref[queries[i][0]]);
    }
    return ans;
};

function isVowel(x)
{
    if (x == 'a' || x == 'e' || x == 'i' ||
        x == 'o' || x == 'u' || x == 'A' ||
        x == 'E' || x == 'I' || x == 'O' || x == 'U')
        return true;
    else
        return false;
}
