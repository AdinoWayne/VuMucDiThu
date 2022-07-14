function numOfStrings(patterns: string[], word: string): number {
    let count = 0;
    for(let ptrn of patterns){
        if(word.includes(ptrn)){
            count++;
        }
    }
    return count;
};
