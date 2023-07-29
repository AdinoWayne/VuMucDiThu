function nthUglyNumber(n: number, a: number, b: number, c: number): number {
  const ab = lcm(a, b);
  const bc = lcm(b, c);
  const ac = lcm(a, c);
  const abc = lcm(ab, c);

  const f = (num) => Math.floor(num);
  const getUglyNumberCount = (k) => {
    return (
      f(k / a) +
      f(k / b) +
      f(k / c) -
      f(k / ab) -
      f(k / ac) -
      f(k / bc) +
      f(k / abc)
    );
  };

  let start = n;
  let end = n * Math.min(a, b, c);
  let boundaryIndex = end;

  while (start <= end) {
    const mid = Math.floor((end - start) / 2) + start;
    if (getUglyNumberCount(mid) < n) {
      start = mid + 1;
    } else {
      boundaryIndex = mid;
      end = mid - 1;
    }
  }

  return boundaryIndex;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};
