function sortTheStudents(score: number[][], k: number): number[][] {
    score.sort((a,b)=>b[k]- a[k])
    return score
};
// TC O(nLogn)
// SC O(n)
