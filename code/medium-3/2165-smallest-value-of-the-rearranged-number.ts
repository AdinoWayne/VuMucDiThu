function smallestNumber(num: number): number {
    if (num === 0) {
        return 0;
    }
    const stringNum = num.toString();
    if (num < 0) {
        return (
            Number(
                stringNum
                    .substring(1)
                    .split('')
                    .sort((a, b) => Number(b) - Number(a))
                    .join('')
            ) * -1
        );
    } else {
        const splittedString = stringNum.split('');
        const sortedString = splittedString.sort(
            (a, b) => Number(a) - Number(b)
        );
        if (sortedString[0] === '0') {
            const indexOfNonZeroNum = (function () {
                for (let index = 0; index < splittedString.length; index++) {
                    if (splittedString[index] !== '0') {
                        return index;
                    }
                }
            })();
            const store = splittedString[0];
            splittedString[0] = splittedString[indexOfNonZeroNum];
            splittedString[indexOfNonZeroNum] = store;
        }
        return Number(sortedString.join(''));
    }
};
// Time Complexity: O(n log n) in most cases, O(n * n log n) in the worst case for very small n.
// Space Complexity: O(n)
