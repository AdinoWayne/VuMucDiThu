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
