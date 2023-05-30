function decodeAtIndex(S: string, K: number): string {
  let cnt = 0;
  let i = 0;
  for (; i < S.length; ++i) {
    const ch = S[i];
    if (/[a-z]/.test(ch)) {
      cnt++;
    } else if (/\d/.test(ch)) {
      cnt *= +ch;
    }
    if (cnt >= K) {
      break;
    }
  }
  for (let j = i; j >= 0; --j) {
    const ch = S[j];
    if (/[a-z]/.test(ch)) {
      if (K === cnt) return S[j];
      cnt--;
    } else if (/\d/.test(ch)) {
      cnt /= +ch;
      K %= cnt;
      if (K === 0) K = cnt;
    }
  }
};

// Time complexity: O(n)
// Space complexity: O(1)
