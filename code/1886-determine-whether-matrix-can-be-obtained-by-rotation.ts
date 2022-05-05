function findRotation(mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < 4; ++i) {
      if (JSON.stringify(mat) == JSON.stringify(target))
            return true;
      rotate(mat);
    }
    return false;
};

function rotate(M: number[][]):void {
    for (let i = 0, j = M.length - 1; i < j; ++i, --j) {
          let temp = M[i];
          M[i] = M[j];
          M[j] = temp;
    }
    for (let i = 0; i < M.length; ++i)
          for (let j = i + 1; j < M.length; ++j) {
            let temp = M[i][j];
            M[i][j] = M[j][i];
            M[j][i] = temp;
    }
}
