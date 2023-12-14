function getMinSwaps(num: string, k: number): number {
    const digits = [...num]
    const len = digits.length;
    const swap = (i, j) => [digits[i], digits[j]] = [digits[j], digits[i]]
    const reverse = (i) => {
        for (let j = len - 1; i < j; ++i && --j) {
            swap(i, j);
        }
    }
    const nextPermutation = () => {
        let i = len - 2;
        while (digits[i] >= digits[i + 1]) {
            i--;
        }
        let j = len - 1;
        while (digits[j] <= digits[i]) {
            j--;
        }
        swap(i, j);
        reverse(i + 1);
    }
    for (let i = 0; i < k; i++) {
        nextPermutation();
    }
    let numSwaps = 0;
    for (let i = 0; i < len; i++) {
        let j = i;
        while (num[i] !== digits[j]) {
            j++;
        }
        while (i < j) {
            swap(j, j - 1);
            numSwaps++;
            j--;
        }
    }
    return numSwaps;
};
// TC O(kn2) where n is the length of the input string and k is the number of permutations to be performed
// SC O(n)
