function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat[0].length * mat.length !== r * c) return mat;

    const flatArr = mat.flat(), answer = [[]];

    flatArr.forEach((val) => {
        if (answer[answer.length - 1].length === c) answer.push([]);
        answer[answer.length - 1].push(val);
    });

    return answer;
};
