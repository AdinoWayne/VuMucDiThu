function canVisitAllRooms(rooms: number[][]): boolean {
    function dfs(current){
        current.forEach(node => {
           if (!(visited.has(node))){
               visited.add(node);
               total++;
               dfs(rooms[node]);
           } 
        });
    }
   
    let visited = new Set();
    visited.add(0);
    let total = 0;
    
    dfs(rooms[0]);
    return total == rooms.length-1? true:false;
};
