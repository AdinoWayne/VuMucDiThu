function getSum(a: number, b: number): number {
      let carry;
      while((a & b) !== 0){
          carry = (a & b) << 1;
          a = a ^ b;
          b = carry;
      }
      return a ^ b;
};

// way2

function getSum(x: number, y: number): number {
    if (y == 0)
        return x;
    else
        return getSum(x ^ y, (x & y) << 1);
}
