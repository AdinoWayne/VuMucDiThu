function sumZero(n: number): number[] {
    let answer = [];
    let index = 0;

    if (n % 2 == 1)
        answer[index++] = 0;

    n /= 2;

    for (let i = 1; i <= n; i++) {
        answer[index++] = i;
        answer[index++] = -i;
    }

    return answer;
};
