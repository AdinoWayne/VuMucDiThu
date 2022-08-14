function percentageLetter(s: string, letter: string): number {
    let count = 0;
    for (let i of s) { // count how many letters are in s
        if (i == letter) count++;
    }
    return (Math.floor((count) / (s.length) * 100)) // get percentage
};
