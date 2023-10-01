function findKthBit(n: number, k: number): string {
   if (k === 1)    return '0';
   if (k === 2)    return '1';
   
   let binary = 2;
   while (binary < k) {
       binary *= 2;
   }
   
   let count = 0;
   while (binary > 2) {
       if (k == binary/2) {
//             The starting number is 1 if at position power of 2 (2^x)
           return (count%2 == 0) ? '1' : '0';
       }
       if (k > binary/2) {
           k = binary-k;
           count++;
       }
       binary /= 2;
   }

   return (count%2 == 0) ? '0' : '1';
};
