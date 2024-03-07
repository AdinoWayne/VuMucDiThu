function minSum(nums1: number[], nums2: number[]): number {
    let s1,s2,z1,z2;
    s1 = sum(nums1);
    s2 = sum(nums2);

    z1 = zeros(nums1)
    z2 = zeros(nums2)

    s1+=z1
    s2+=z2

    if (s1 == s2) return s1;
    if (s1 < s2) return z1 > 0 ? s2: -1
    if (s1 > s2) return z2 > 0 ? s1: -1

    return -1;
};

const sum = (arr) => arr.reduce((a,b) => a + b, 0);
const zeros = (arr) => arr.filter(x => x == 0).length;
