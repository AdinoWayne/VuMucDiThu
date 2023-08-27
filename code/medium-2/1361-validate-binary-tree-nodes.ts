function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
   const s = new Set(),
          q = [];
    const root = findRoot(n, leftChild, rightChild);
    if(root===-1) return false;
    q.push(root);
    
    while(q.length>0) {
        const node = q.shift();
        if(s.has(node)) return false;
        
        s.add(node);
        const left = leftChild[node],
              right = rightChild[node];
        if(left!==-1) q.push(left);
        if(right!==-1) q.push(right);
    }
    
    return s.size===n;
};

function findRoot(n, leftArr, rightArr) {
    const uniq = new Set([...rightArr, ...leftArr].filter(n=>n!==-1));
    for(let i=0; i<n; ++i) {
        if(!uniq.has(i)) return i;
    }
    return -1;
}
