function decodeString(s: string): string {
  const stack = [];
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};

// The time complexity of the decodeString function is O(n), where n is the length of the input string.
// This is because the function only loops through the string once, performing a constant amount of work for each character.
// The stack operations, such as push and pop, take O(1) time on average.

// The space complexity of the decodeString function is O(n), where n is the length of the input string.
// This is because the function uses a stack to store characters, and in the worst case, the entire input string would be stored in the stack.
