function titleToNumber(s: string): number {
  var res = 0;
  var num = 0;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    num = getNum(s[len - 1 - i]);
    res += Math.pow(26, i) * num;
  }
  return res;
};

var getNum = function (char: string): number {
  var start = 'A'.charCodeAt(0) - 1;
  return char.charCodeAt(0) - start;
};
