function isPalindrome(s: string): boolean {
  var i = 0;
  var j = s.length - 1;
  var m = '';
  var n = '';
  while (i < j) {
    m = s[i].toLowerCase();
    n = s[j].toLowerCase();
    if (!isLetterOrDigit(m)) i++;
    else if (!isLetterOrDigit(n)) j--;
    else if (m === n) { i++; j--; }
    else return false;
  }
  return true;
};

function isLetterOrDigit(c: any):boolean {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};
