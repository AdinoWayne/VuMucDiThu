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
// };
// When we add the number of elements of each set in n(A) + n(B) + n(C), since A ∩ B ⊆ A, B,
// all elements in A ∩ B are being counted twice. Similary all elements of A ∩ C and B ∩ C are being counted twice as well.
// To remedy this, we subtract n(A ∩ B) + n(A ∩ C) + n(B ∩ C).
// Now, n(A ∩ B ∩ C) was added three times and then subtracted three times, so it is missing. Thus, we add n(A ∩ B ∩ C).
// F(N) = a + b + c - a ∩ c - a ∩ b - b ∩ c + a ∩ b ∩ c
// F(N) = N/a + N/b + N/c - N/lcm(a, c) - N/lcm(a, b) - N/lcm(b, c) + N/lcm(a, b, c)
// TC O(nlogn)
// SC O(1)
