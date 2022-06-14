function toGoatLatin(sentence: string): string {
    const words: string[] = sentence.split(" ");
    const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", ];
    let addA: string = "a";
    for(let i = 0; i < words.length; i++) {
        if(vowels.includes(words[i][0])) {
            words[i]+="ma";
        } else {
            words[i] = words[i].slice(1) + words[i][0] + "ma";
        }
        words[i] += addA;
        addA += "a";
    }

    return words.join(" ");
};
