function isAnagram(s: string, t: string): boolean {
  var lenA = s.length;
  var lenB = t.length;
  var map = Array(26);
  var index = 0;
  var base = 'a'.charCodeAt(0);

  if (lenA !== lenB) return false;

  for (var i = 0; i < lenA; i++) {
    index = s[i].charCodeAt(0) - base;
    if (!map[index]) map[index] = 0;
    map[index]++;
  }

  for (var j = 0; j < lenB; j++) {
    index = t[j].charCodeAt(0) - base;
    if (!map[index]) return false;
    map[index]--;
  }

  return true;
};
