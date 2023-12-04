function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    let a1 = sentence1.split(" ");
    let a2 = sentence2.split(" ");
    return a1.length <= a2.length ? ok(a1, a2) : ok(a2, a1);
};

const ok = (short, long) => {
    let re = []; // record short array length
    while (1) {
        if (short[0] == long[0]) {
            short.shift();
            long.shift();
        }
        if (short[short.length - 1] == long[long.length - 1]) {
            short.pop();
            long.pop();
        }
        if (re[0] == short.length) break; // short array length stop changing, loop end
        re.unshift(short.length);
    }
    return short.length == 0;
};
// TC O(n)
// SC O(n)
