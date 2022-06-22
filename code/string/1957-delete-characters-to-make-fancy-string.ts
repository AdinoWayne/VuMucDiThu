function makeFancyString(s: string): string {
  let a = s.split("");

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1] && a[i + 1] === a[i + 2]) {
      a[i] = "";
    }
  }

  return a.join("");
};
