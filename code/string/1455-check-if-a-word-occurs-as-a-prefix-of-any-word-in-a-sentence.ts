function isPrefixOfWord(sentence: string, searchWord: string): number {
    let list = sentence.split(' ')
    for(let i=0;i<list.length;i++){
        if(list[i].search(searchWord) == 0){
            return i+1
        }
    }
    return -1
};
