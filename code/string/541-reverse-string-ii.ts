function reverseStr(s: string, k: number): string {
    // strings are immutable in javascript
    // converting to an array will allow in place letter swapping
    const a = s.split('');
    // loop through the array in 2*k increments
    for (let start = 0; start < a.length; start += 2 * k) {
        let i = start;
        let j = Math.min(start + k - 1, a.length - 1);
        // reverse first k characters in current increment
        while (i < j) {
            let tmp = a[i];
            a[i++] = a[j];
            a[j--] = tmp;
        }
    }
    // return a string as the result
    return a.join('');
};
