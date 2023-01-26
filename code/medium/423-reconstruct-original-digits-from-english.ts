function originalDigits(str: string): string {
    const MAX = Number.MAX_SAFE_INTEGER;
    const n = str.length;

    const charCounts = new Array(26).fill(0);

    for (const char of str) {
        const idx = char.charCodeAt(0) - 97;
        charCounts[idx]++;
    }

    const numCounts = new Array(10).fill(0);

    const f = "f".charCodeAt(0) - 97;
    const i = "i".charCodeAt(0) - 97;
    const o = "o".charCodeAt(0) - 97;
    const r = "r".charCodeAt(0) - 97;
    const s = "s".charCodeAt(0) - 97;

    const zero = "z".charCodeAt(0) - 97;

    if (charCounts[zero] > 0) {
        numCounts[0] = charCounts[zero];
        charCounts[o] -= charCounts[zero];
        charCounts[r] -= charCounts[zero];
        charCounts[zero] = 0;
    }

    const two = "w".charCodeAt(0) - 97;

    if (charCounts[two] > 0) {
        numCounts[2] = charCounts[two];
        charCounts[o] -= charCounts[two];
        charCounts[two] = 0;
    }

    const four = "u".charCodeAt(0) - 97;

    if (charCounts[four] > 0) {
        numCounts[4] = charCounts[four];
        charCounts[f] -= charCounts[four];
        charCounts[o] -= charCounts[four];
        charCounts[r] -= charCounts[four];
        charCounts[four] = 0;
    }

    const five = f; 

    if (charCounts[five] > 0) {
        numCounts[5] = charCounts[five];
        charCounts[i] -= charCounts[five];
        charCounts[five] = 0;
    }

    const six = "x".charCodeAt(0) - 97;

    if (charCounts[six] > 0) {
        numCounts[6] = charCounts[six];
        charCounts[i] -= charCounts[six];
        charCounts[s] -= charCounts[six];
        charCounts[six] = 0;
    }

    const seven = s;

    if (charCounts[seven] > 0) {
        numCounts[7] = charCounts[seven];
        charCounts[seven] = 0;
    }

    const eight = "g".charCodeAt(0) - 97;

    if (charCounts[eight] > 0) {
        numCounts[8] = charCounts[eight];
        charCounts[i] -= charCounts[eight];
        charCounts[eight] = 0;
    }
	
    const one = o;

    if (charCounts[one] > 0) {
        numCounts[1] = charCounts[one];
    }

    const three = "r".charCodeAt(0) - 97;

    if (charCounts[three] > 0) {
        numCounts[3] = charCounts[three];
        charCounts[three] = 0;
    }

    const nine = i;

    if (charCounts[nine] > 0) {
        numCounts[9] = charCounts[nine];
    }

    let res = "";

    for (let i = 0; i <= 9; i++) {
        if (numCounts[i] > 0) res += `${i}`.repeat(numCounts[i]);
    }

    return res;
};
