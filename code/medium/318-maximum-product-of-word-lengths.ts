function maxProduct(words: string[]): number {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const a = words[i];
      const b = words[j];
      let unique = true;

      // compare wordz
      if ( areStringsUnique(words[i], words[j]) ) {
        max = Math.max( max, (words[i].length * words[j].length) )
      }
      
    }
  }

  return max;
};

const areStringsUnique = (a, b) => {
  for (let i = 0; i < a.length; i++){
    if ( b.includes(a[i]) ){
       return false;
    }
  } 
  return true;
};
