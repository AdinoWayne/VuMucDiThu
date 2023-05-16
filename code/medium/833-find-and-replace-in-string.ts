function findReplaceString(S: string, indices: number[], sources: string[], targets: string[]): string {
  let result:any = S.split('');
  indices.forEach((indexInS, i) => {
    const sourceChars = sources[i];
    const targetChars = targets[i];
    const strSlice = s.slice(indexInS, indexInS + sourceChars.length);
    if (strSlice === sourceChars) {
      result[indexInS] = [targetChars];
      let elementsToReplace = sourceChars.length - 1;
      while (elementsToReplace > 0) {
        // if element of sources length > 1;
        indexInS += 1;
        result[indexInS] = "";
        elementsToReplace -= 1;
      }
    }
  });
  return result.join("");
};

<!--
Time complexity: O(n + m * k) n is the length of the string S, m is the length of the indices array, and k is the average length of the source characters
Space complexity: O(n)
-->
