function findAnagrams(s: string, p: string): number[] {
    const resultArray = [];
    const pLength = p.length;
    const sLength = s.length;

    // create two empty arrays with 0 inside
    const pWindow = new Array(26).fill(0);
    const sWindow = new Array(26).fill(0);

    //assume only a-z
    //TODO: add checker later if input has invalid characters
    [...p].forEach(character => {
        // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
        pWindow[character.charCodeAt(0)-97]++
    });
    
    [...s].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= pLength) sWindow[s.charCodeAt(index-pLength)-97]--
        sWindow[character.charCodeAt(0)-97]++
        // compare two strings
        if (pWindow.join()===sWindow.join()) resultArray.push(index+1-pLength)
    });

    return resultArray
};
