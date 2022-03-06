function nextGreatestLetter(letters: string[], target: string): string {
   let left = 0;
   let right = letters.length;
   while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (letters[mid] <= target) {
         left ++;
      } else {
         right = mid;
      };
   };
   return letters[left % letters.length];
};
