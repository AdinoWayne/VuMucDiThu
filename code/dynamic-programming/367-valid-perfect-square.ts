function isPerfectSquare(num: number): boolean {
  var start = 1;
  var curr = 1;
  var tmp;
  
  if(num === 1){
    return true;
  }
  
  while(curr <= num){
    start += 2;
    tmp = start + curr;
    if (tmp <= num){
      curr = tmp;
      if(curr === num){
          return true;
      }
    } else{
      return false;
    }
  }
};
