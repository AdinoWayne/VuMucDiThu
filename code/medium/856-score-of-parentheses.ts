function scoreOfParentheses(S: string): number {
    let stack = [0];
    const arrS = S.split("");
    for (let i in arrS) {
        if (S[i] == "(") {
            stack.push(0);
        }
        else {
            let last = stack.pop();
            stack[stack.length - 1] += 2 * last || 1
        }
    }
    return stack.pop();
};

// Time complexity: O(n)
// Space complexity: O(n)
