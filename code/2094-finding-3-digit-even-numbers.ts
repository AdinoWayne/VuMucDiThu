function findEvenNumbers(digits: number[]): number[] {
    let count = new Array(10).fill(0);
    let ans = [];
    for (let d of digits) ++count[d];
    for (let a = 1; a <= 9; ++a)
      for (let b = 0; b <= 9; ++b)
        for (let c = 0; c <= 8; c += 2)
          if (count[a] > 0 && count[b] > (b == a) &&
              count[c] > ((c == a) ? 1 : 0) + ((c == b) ? 1 : 0))
            ans.push(a * 100 + b * 10 + c);

    return ans;
};
