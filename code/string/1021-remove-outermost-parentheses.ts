function removeOuterParentheses(S: string): string {
  let count = {}
  let num = 0
  const pArr = []

  for(let i = 0; i < S.length; i++){
    count[S[i]] = count[S[i]] ? ++count[S[i]] : 1
    if(count['('] === count[')']){
      pArr.push(S.slice(num, i + 1))
      count = {}
      num = i + 1
    }
  }
  for(let item in pArr){
    pArr[item] = pArr[item].slice(1, pArr[item].length - 1)
  }
  return pArr.join('')
};
