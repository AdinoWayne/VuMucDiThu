function transpose(matrix: number[][]): number[][] {
  var arr = []
  var temp = []
  var m = matrix.length
  var n = matrix[0].length
  for (var i = 0;i<n;i++) {
    temp = []
    for (var j = 0;j<m;j++) {
      temp.push(matrix[j][i])
    }
    arr.push(temp)
  }
  return arr
};
