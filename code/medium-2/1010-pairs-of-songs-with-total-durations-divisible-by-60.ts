function numPairsDivisibleBy60(time: number[]): number {
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60;
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
    });
    return ans;
};
// TC O(n)
// SC O(1)
