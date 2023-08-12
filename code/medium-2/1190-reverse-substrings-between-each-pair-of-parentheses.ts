function reverseParentheses(s: string): string {
    const stack = [];
    for (let char of s) {
      if (char !== ")") {
        stack.push(char);
        continue;
      }
      let c = stack.pop();
      let queue = [];
      while (c !== "(") {
        queue.push(c);
        c = stack.pop();
      }
      while (queue.length) {
        stack.push(queue.shift());
      }
    }
    return stack.join("");
};
// TC O(n2)
// SC O(n)
