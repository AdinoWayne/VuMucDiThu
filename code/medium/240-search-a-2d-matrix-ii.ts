function searchMatrix(matrix: number[][], target: number): boolean {
    if(matrix.length === 0){
        return false;
    }
    //start with top-right element
    var i = 0;
    var j = matrix[0].length - 1;
    
    //loop till row and column number are within bounds
    while(i <= matrix.length - 1 && j >= 0){
        
        if(matrix[i][j] > target){
            //current element is greater than target
            //means this row might have the target element
            //change column
            j--;
        }else if(matrix[i][j] === target){
            //element found
            return true;
        }else if(matrix[i][j] < target){
            //current element is lesser than target
            //means this column might have the target element
            //change rows
            i++;
        }
    }
    return false;
};
