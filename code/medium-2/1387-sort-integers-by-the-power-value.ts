function getKth(lo: number, hi: number, k: number): number {
    const findPower = num => {
        let power = 0
        while (num > 1) {
            power++
            num = num % 2 ? 3 * num + 1 : num / 2
        }
        return power
    }
    const result = [], map = {}
    for (let i = lo; i <= hi; i++) {
        result.push(i)
        map[i] = findPower(i)
    }
    result.sort((a, b) => map[a] - map[b])
    return result[k - 1]
};
// TC O((hi - lo + 1) * log(hi - lo + 1))
// SC O(hi - lo + 1) 1
