function divideArray(nums: number[]): boolean {
    let count = new Array(501).fill(0)

    for (let num of nums)
      ++count[num];

    return count.every(c => c % 2 == 0);
};
