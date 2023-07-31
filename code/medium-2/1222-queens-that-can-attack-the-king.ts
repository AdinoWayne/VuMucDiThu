function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    let answer = [];
    
    traverse(king[0],king[1],-1,-1);
    traverse(king[0],king[1],-1,0);
    traverse(king[0],king[1],-1,1);
    traverse(king[0],king[1],0,-1);
    traverse(king[0],king[1],0,1);
    traverse(king[0],king[1],1,-1);
    traverse(king[0],king[1],1,0);
    traverse(king[0],king[1],1,1);
    
    return answer;
    
    function traverse(currentX, currentY, x, y) {
        if (currentX < 0 || currentY < 0 || currentX > 7 || currentY > 7)   return null;
        for (let i = 0; i < queens.length; i++) {
            if (currentX == queens[i][0] && currentY == queens[i][1])   {
                answer.push([currentX,currentY])
                return null;
            }
        }
        traverse(currentX + x, currentY + y, x, y);
    }
};
