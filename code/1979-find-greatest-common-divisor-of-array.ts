function findGCD(nums: number[]): number {
    nums.sort((a, b) => a - b)
    return mygcd(nums[0], nums[nums.length - 1]);
};

const mygcd = (x: number, y: number): number => {
    let r;
    while(y)
    {

        r = x%y;
        x = y;
        y = r;
    }
    return x;
}
