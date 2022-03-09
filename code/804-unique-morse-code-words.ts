function uniqueMorseRepresentations(words: string[]): number {
    const mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let arr = [];

    words.forEach((v,i) => {
        let temp = '';
        for(let j = 0; j < words[i].length; j++){
            let turned = words[i].charCodeAt(j) - 97;
            temp += mos[turned];
        }
        if (arr.indexOf(temp) === -1) arr.push(temp)
    })

    return arr.length;
};
