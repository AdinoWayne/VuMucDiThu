function getOrder(tasks: number[][]): number[] {
    var n = tasks.length;
    tasks = tasks.map((t,i)=>[...t, i]);
    tasks.sort((a,b)=>{
        if(a[0]===b[0])
        {
            return a[2]-b[2];
        }
        return a[0]-b[0];
    });
    var q = [];
    var time=tasks[0][0];
    var ans = [];
    var enqIndex = 0;
    while(ans.length < n)
    {
        if(q.length===0 && time < tasks[enqIndex][0])
        {
            time = tasks[enqIndex][0];
        }
        var curSize = q.length;
        while(enqIndex<tasks.length && tasks[enqIndex][0]<=time)
        {
            q.push(tasks[enqIndex]);
            enqIndex++;
        }
        if(curSize < q.length)
        {
            if(q.length>0)
            {
                q.sort((a,b)=>{
                    if(a[1] === b[1])
                    {
                        return a[2]-b[2];
                    }
                    return a[1]-b[1];
                });
            }
        }
        var t = q.shift();
        ans.push(t[2]);
        time += t[1];
    }
    return ans;
};
// TC O(nLogn)
// SC O(n)
