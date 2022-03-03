function islandPerimeter(grid: number[][]): number {
    var island = 0,
        nei = 0,
        col = grid.length,
        row = grid[0].length;
        
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row j++){
            if(grid[i][j] == 1){
                island++; 
                
                if(i+1 < col && grid[i+1][j] == 1)nei++;
                
                if(j+1 < row && grid[i][j+1] == 1)nei++;
            }
        }
    }
    return island * 4 - nei * 2
};
