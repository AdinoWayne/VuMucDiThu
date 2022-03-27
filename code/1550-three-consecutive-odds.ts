function threeConsecutiveOdds(arr: number[]): boolean {
    let isOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isOdd === 3) {
            break;
        }
        if (arr[i] % 2 === 1) {
            isOdd += 1;
        } else {
            isOdd = 0;
        }
    }
    return isOdd === 3 ? true : false;
};
