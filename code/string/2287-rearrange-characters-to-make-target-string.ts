function rearrangeCharacters(s: string, target: string): number {
    let min=s.length
    for(let l of target){
        let re = new RegExp(l, 'g')
        min=Math.min(min,Math.trunc((s.match(re)?.length || 0)/target.match(re).length))
    }
    return min
};
