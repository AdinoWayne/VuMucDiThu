function isValidSerialization(preorder: string): boolean {
    const arr = preorder.split(',');
    let i = 0;
    
    function callDFS() {
        if(i >= arr.length) return false;
        // i++
        if(arr[i++] === '#') return true;
        // el is number
        return callDFS() && callDFS();
    }
    return callDFS() && i == arr.length;
};

// TC O(n)
// SC O(n)
