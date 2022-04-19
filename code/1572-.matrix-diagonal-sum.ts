function diagonalSum(mat: number[][]): number {
  var primary = 0;
  for (var i = 0; i < mat.length; i++) {
      if (i == (mat[i].length - i - 1)) {
            primary = primary + mat[i][i];
      } else {
            primary = primary + mat[i][i] + mat[i][mat[i].length - i - 1];
      }

  }
  return primary;
};
