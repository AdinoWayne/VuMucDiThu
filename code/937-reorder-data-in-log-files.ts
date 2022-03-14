function reorderLogFiles(logs: string[]): string[] {
  let digitArr = [];
  let letterArr = []
  logs.forEach(log => {
    let x = 0
    while(log[x]!==' '){
        x++;
    }
    // console.log(Number(log[x + 1]))
    if(!isNaN(Number(log[x + 1]))){
      digitArr.push(log);
    }else{
      letterArr.push(log)
    }
  })
  letterArr.sort( (a, b) => {
    let strA = a.substr(a.indexOf(' ') + 1);
    let strB = b.substr(b.indexOf(' ') + 1);
    if(strA === strB) return a.localeCompare(b);
    return strA.localeCompare(strB);
  })
  return [...letterArr, ...digitArr]
};
