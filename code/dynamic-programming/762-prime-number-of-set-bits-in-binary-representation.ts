function countPrimeSetBits(left: number, right: number): number {
    let result = 0;
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];

    for(let i = left; i <= right; i++){
      let num2 = i.toString(2);
      let count = 0;

      num2.split('').forEach(sym => {
        if(sym === '1') count++;
      });

      if(primes.indexOf(count) > -1) result++;
    }

    return result;
};
