function countCharacters(words: string[], chars: string): number {
    let count = 0;
    for(let word of words){
        let map = initMap(chars);
        if(isMatch(word, map)){
            count += word.length;
        }
    }
    return count;
};

var initMap = function(chars){
    let map = {};
    for(let i in chars){
        if(!map[chars[i]]){
           map[chars[i]] = 0;
        }
        map[chars[i]]++;
    }
    return map;
}

var isMatch = function(word, map = {}){
    for(let i in word){
        if(!map[word[i]] || map[word[i]] === 0){
            return false;
        }
        map[word[i]] --;
    }
    
    return true;
}
