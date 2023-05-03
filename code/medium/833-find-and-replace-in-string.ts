function findReplaceString(S: string, indices: number[], sources: string[], targets: string[]): string {
  var result:any = S.split('');
  indices.forEach((indexInS, i) => {
    var sourceChars = sources[i];
    var targetChars = targets[i];
    
    if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {
      result[indexInS] = [targetChars];
      var elementsToReplace = sourceChars.length - 1;
      while (elementsToReplace > 0) {
        indexInS += 1;
        result[indexInS] = '';
        elementsToReplace -= 1;
      }
    }
  });
  return result.join('');
};
