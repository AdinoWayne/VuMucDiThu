function subdomainVisits(cpdomains: string[]): string[] {
    let obj = {};
    let response = [];
    for (let str of cpdomains){
        let temp = str.split(" ");
        let num = parseInt(temp[0]);
        let domain = temp[1].split(".");
        let key = domain.pop();
        obj[key] = obj[key]?obj[key]+num:num;
        
        while(domain.length>0){
            key = domain.pop()+"."+key;
            obj[key] = obj[key]?obj[key]+num:num;
        }
    }
    
    for(let i in obj){
        response.push (obj[i] + " "+ i)
    }
    
    return response;
};

<!-- 
format: d1.d2.d3
line8 let key = domain.pop(); get d3
line12 key = domain.pop()+"."+key; loop add d1,d2 to key
obj = { [d3]: num, [d2.d3]: num }

Time complexity: O(n)
Space complexity: O(n)
-->
