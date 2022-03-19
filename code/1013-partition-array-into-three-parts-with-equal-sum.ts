function canThreePartsEqualSum(A: number[]): boolean {
    const sum = A.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

    if (sum % 3 !== 0) {
        return false;
    }

    const divide = sum / 3;
    let calcSum = 0;
    let part = 0;

    for (let i = 0; i < A.length; i++) {
        calcSum += A[i];
        if (calcSum === divide) {
            calcSum = 0;
            part += 1;
        }
    }

    return part >= 3;
};
