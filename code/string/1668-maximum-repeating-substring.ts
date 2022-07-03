function maxRepeating(sequence: string, word: string): number {
    let count = 0;
  	let addOn = word
    while(sequence.includes(word) === true) {
        word = word + addOn
      	count++
    }
    return count
};
