function appendCharacters(s: string, t: string): number {
    const tSize = t.length;
    let tPointer = 0;
    let expectedLetter = t[0];

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];

        if (currentLetter == expectedLetter) {
            tPointer++;
            if (tPointer > tSize)
                return 0;
            expectedLetter = t[tPointer];
        }
    }

    return tSize - tPointer;
};
// TC O(s.length * t.length)
// SC O(1)
