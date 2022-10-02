function dayOfTheWeek(d: number, m: number, y: number): string {
  if (m < 3) { --y; m += 12; }
  const c = Math.floor(y / 100);
  y %= 100;
  const w = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((26 * (m + 1)) / 10) + d - 1) % 7;
  return LIST[(w + 7) % 7];
};

const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// OR Zeller’s Congruence

function dayOfTheWeek2(d: number, m: number, y: number): string {
  const LIST = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  if (m < 3) { --y; m += 12; }
  const c = Math.floor(y / 100);
  const k = y % 100;
  const w = d + 13 * (m + 1) / 5 + k + Math.floor(k / 4) +
                              Math.floor(c / 4) + 5 * c;
  return LIST[Math.floor(w) % 7];
};
