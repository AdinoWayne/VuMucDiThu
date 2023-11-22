function decode(encoded: number[]): number[] {
    let len = encoded.length, first = (len + 2 >> 1) % 2
    for (let i = 1; i < len; i += 2) first ^= encoded[i]
    let perm = [first]
    for (let i = 0; i < len; i++) perm[i+1] = perm[i] ^ encoded[i]
    return perm
};
// /problems/decode-xored-permutation/solutions/1035374/javascript-python-simple-5-line-solution-w-explanation-beats-100/
// Thus we can simplify the equation for the XOR of all numbers from 1 to N for all odd values of N to (N + 1 >> 1) % 2.
// Also, since XOR is its own inverse function, we can work the encoding equation backwards:
// if:  E[i] = perm[i] ^ perm[i+1]           // By the encoding definition
//  ⇒:  perm[i+1] = E[i] ^ perm[i]           // Inverted to solve for perm[i+1]

// TC O(nLogn)
// SC O(n)
