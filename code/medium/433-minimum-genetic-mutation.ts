function minMutation(start: string, end: string, bank: string[]): number {
    let banks = new Set(bank);
    if( !banks.has(end) ) return -1;
    let chars = ['A', 'T', 'C', 'G'];        
    var Q = [[start,0]];
    var item, dist, i, j;
    
    
    while( Q.length > 0 ) {
        [item,dist] = Q.shift();
        if( item == end ) return dist;
        
        for( i=0; i<8; i++ ) {
            for( j=0; j<4; j++ ) {
                if( item[i] == chars[j] ) continue;
                var node = item.slice(0,i) + chars[j] + item.slice(i+1);
                if( banks.has(node) ) {
                    Q.push([node,dist+1]);
                    banks.delete(node);
                }
            }
        }
    }
    
    return -1;
};
// The time complexity of this function is O(n^2) where n is the length of the start string.
// The function uses a breadth-first search (BFS) algorithm to find the minimum number of mutations needed to transform the start string to the end string.
// For each character in the start string, the function considers all possible mutations (replacing that character with one of the other three possible DNA bases) and checks if the resulting string is in the bank.
// If so, it is added to the queue with a distance of one greater than the current item's distance.
// This process continues until the end string is found or the queue is empty.
// Since the length of the start string is at most 8, the maximum number of nodes that will be added to the queue is 8^8=16,777,216, which is a constant value.
// Therefore, the time complexity of the BFS part of the algorithm is O(1).
// However, the function still needs to check if each mutation is in the bank, which requires O(n) time per mutation, giving a total time complexity of O(n^2).
