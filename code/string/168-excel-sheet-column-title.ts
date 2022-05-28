function convertToTitle(columnNumber: number): string {
  var num = columnNumber;
  var tmp = 0;
  var res = '';
  while (num > 0) {
    tmp = num % 26;
    if (tmp === 0) tmp = 26;
    res = getChar(tmp) + res;
    num = (num - tmp) / 26;
  }
  return res;
};

function getChar(num: number): string {
  var start = 'A'.charCodeAt(0);
  return String.fromCharCode(start + num - 1);
};
