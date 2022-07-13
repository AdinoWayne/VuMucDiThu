function largestOddNumber(num: string): string {
    for (let i = num.length - 1; i >= 0; i --) {
        if (parseInt(num[i]) % 2) {
            return num
        } else {
            num = num.slice(0, -1)
        }
    }
    return num
};
