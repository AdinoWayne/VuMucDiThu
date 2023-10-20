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
// The idea is to check the invert times of the specific digits
// ex: n = 4, k = 11 (011100110110001)
// s[11] = ~s[5] = ~(~s[3]) = ~(~(~s[1])) = '1'
// From above case, we can notice that
// 8 < 11 < 16, the mirror number is 16 - 11 = 5;
// 4 < 5 < 8, the mirror number is 8 - 5 = 3;
// 2 < 3 < 4, the mirror number is 4 - 3 = 1;
// TC O(n)
// SC O(1)
