function restoreString(s: string, indices: number[]): string {
  let sol:any[] = Array.from({ length: s.length }, () => 0);
  for (let i = 0; i < s.length; i++) {
    sol[indices[i]] = s[i];
  }
  return sol.join("");
};
