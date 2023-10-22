function mostCompetitive(nums: number[], k: number): number[] {
    let n = nums.length;
    let stack = [];
    let remove = n - k;
    for (const num of nums) {
        while (num < stack[stack.length - 1] && remove) {
            remove--;
            stack.pop();
        }
        stack.push(num);
    }
    while (stack.length > k) {
        stack.pop();
    }
    return stack;
};
