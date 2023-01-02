function isValidSerialization(preorder: string): boolean {
    const arr = preorder.split(',');
    let i = 0;
    
    function callDFS() {
        if(i >= arr.length) return false;        
        if(arr[i++] === '#') return true;
        return callDFS() && callDFS();
    }
    return callDFS() && i == arr.length;
};
