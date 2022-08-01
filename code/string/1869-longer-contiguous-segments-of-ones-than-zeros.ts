function checkZeroOnes(s: string): boolean {
  let count1 = 0, count0 = 0, longest0 = 0, longest1  = 0;
  for (let i = 0; i < s.length; i++) {
    const bit = s.charAt(i);
    if (bit === '1') { count1 += 1;}
    else { count1 = 0; }
    if (bit === '0') { count0 += 1;}
    else { count0 = 0; }
    longest0 = Math.max(longest0, count0);
    longest1 = Math.max(longest1, count1);
  }
  return longest1 > longest0;
}
