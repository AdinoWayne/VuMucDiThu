function escapeGhosts(ghosts: number[][], target: number[]): boolean {
    const [tarX, tarY] = target;
    const playerDist = Math.abs(tarX) + Math.abs(tarY);
    
    for (let i = 0; i < ghosts.length; i++) {
        const [ghostX, ghostY] = ghosts[i];
        const ghostDist = Math.abs(ghostX - tarX) + Math.abs(ghostY - tarY);
        
        if (ghostDist <= playerDist) return false;
    }
    
    return true;
};
// If a ghost can reach the target earlier than me, I am impossible to escape, return false.
// If I can reach the target earlier than all ghosts, I am possible to escape return true.
// Time complexity: O(n)
// Space complexity: O(1)
