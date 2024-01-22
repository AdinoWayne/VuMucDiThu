function minimizedMaximum(n: number, quantities: number[]): number {
    var max = Math.max(...quantities);
    var min = 1;
    var sol = Math.ceil((max + min)/2);
    var foundSolution = tryMaximum(sol, n,quantities);
    while(min<max && foundSolution!==0) {   
        if(foundSolution<0) {
            min=sol+1;
        } else if(foundSolution>0)  {
           max=sol-1;
        }
        sol = Math.ceil((max + min) /2);  
        foundSolution = tryMaximum(sol, n,quantities);
    }
 
    while(foundSolution==0) {
        sol--;
        foundSolution = tryMaximum(sol, n,quantities);
    }
    if (foundSolution<0) sol++;
    return sol;
};

var tryMaximum = function(max, n, quantities) {
    for (let i=0; i<quantities.length; i++) {
       n=n-Math.ceil(quantities[i]/max);
    }
    return n;
}
// TC O(n log(max))
// SC O(1)
