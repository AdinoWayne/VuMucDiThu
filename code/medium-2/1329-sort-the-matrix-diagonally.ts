function diagonalSort(mat: number[][]): number[][] {
    let map = {}
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            if(!map[d]){
                map[d]=[]
            }
            map[d].push(mat[i][j])
        }
    }
    for(let key in map){
        map[key].sort((a,b)=>{return a-b})
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            mat[i][j] = map[d].shift()
        }
    }
    return mat
};
// TC O(mn log n)  where m and n are the number of rows and columns in the input matrix
// SC O(mn)  where m and n are the number of rows and columns in the input matrix
