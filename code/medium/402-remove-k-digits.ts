function removeKdigits(num: string, k: number): string {
    const stack = [];
    let removed = 0;
    for(let n of num) {
        while(stack.length && n < stack[stack.length-1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }
    
    // remove all remaining large numbers
    while(removed < k) {
        stack.pop();
        removed += 1;
    }
    
    // remove all beginning zeroes
    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : '0';
};

// 1. Deleting k digits means keeping n - k digits, where n is the total number of digits.

// 2. Use a stack that you keep sorted ascendingly. You remove elements from it as long as you can still make it to n - k digits,
// and your current element is smaller than the top of the stack

// Time Complexity :- O(N) as we only traversing the string for once
// Space complexity:- O(N) as we will store maximum of n digits in our string
