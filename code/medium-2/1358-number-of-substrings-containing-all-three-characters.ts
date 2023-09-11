function numberOfSubstrings(s: string): number {
    let a = 0, b = 0, c = 0, result = 0;

    for (let i = 0, j = 0; i < s.length; i++) {

        if (s[i] == 'a') a++;
        if (s[i] == 'b') b++;
        if (s[i] == 'c') c++;

        while (a && b && c) {
            result += s.length - i;

            if (s[j] === 'a') a--;
            if (s[j] === 'b') b--;
            if (s[j] === 'c') c--;
            j++;
        }
    }
    return result;
};
// TC O(n2)
// SC O(1)
