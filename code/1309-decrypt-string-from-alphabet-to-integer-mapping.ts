const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};
function freqAlphabets(s: string): string {
  const stack = [];
  for (const char of s) {
    if (char !== '#') { stack.push(char); continue; }
    const digit = stack.pop();
    stack.push(map[(stack.pop() + digit)]);
  }
  let ret = '';
  for (const char of stack) {
    ret += char <= '9' ? map[char] : char;
  }
  return ret;
};
