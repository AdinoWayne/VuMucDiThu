function closestDivisors(num: number): number[] {
     const n2 = num + 2;
      const n1 = num + 1;

      let div = Math.floor(Math.sqrt(n2));

      while (div > 0) {
          if (n1 % div == 0) {
              return [div, n1 / div];
          }

          if (n2 % div == 0) {
            return [div, n2 / div];
          }

          div--;
      }
};
// TC O(sqrt(n))
// SC O(1)
