function highestPeak(isWater: number[][]): number[][] {
    let arr = Array(isWater.length);
    let queue = [];
    let mr = isWater.length;
    let mc = isWater[0].length;
    for(let i = 0; i < mr; i++){
        arr[i] = Array(mc).fill(-1);
        for(let j = 0; j < mc; j++){
            if(isWater[i][j] === 1){
                queue.push([i,j]);
                arr[i][j] = 0;
            }else{
                arr[i][j] = -1;
            }
        }
    }
    let moves = [[-1,0],[1,0],[0,-1],[0,1]];
    let i = 0;
    while(i < queue.length){
        let [r,c] = queue[i];
        for(let move of moves){
            let nr = r + move[0];
            let nc = c + move[1];
            if(nr < 0 || nc < 0 || nr >= mr || nc >= mc || arr[nr][nc] != -1){
                continue;
            }
            arr[nr][nc] = arr[r][c] + 1;
            queue.push([nr,nc]);
        }
        i++;
    }
    return arr;
};
// TC O(n2)
// SC O(n2)
