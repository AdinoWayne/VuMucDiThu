function greatestLetter(s: string): string {
  let uc = { ...Array(26).fill(0) }, lc = { ...Array(26).fill(0) };
  for (let ch of s)
    if (isUpper(ch))
      ++uc[asciiDif(ch, "A")];
    else
      ++lc[asciiDif(ch, "a")];
  for (let i = 25; i >= 0; --i) { // iterating from back to get the greater letter
    if (uc[i] && lc[i]) return String.fromCharCode('A'.charCodeAt(0) + i);
  }
  return "";
};

const isUpper = (char) => char.toUpperCase() === char;
const asciiDif = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);
