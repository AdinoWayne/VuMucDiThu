function maxUniqueSplit(s: string): number {
    const len = s.length
    function helper(setSF, fromIndex) {
        if (fromIndex === len)  return setSF.size
        
        let result = 0
        for (let toIndex = fromIndex; toIndex < len; toIndex++) {
            const substring = s.slice(fromIndex, 1 + toIndex)
            if (!setSF.has(substring)) {
                setSF.add(substring)
                let subresult = helper(setSF, 1 + toIndex)
                result = Math.max(result, subresult)
                setSF.delete(substring)
            }
        }

        return result
    }
    
    
    let setSF = new Set()
    let result = helper(setSF, 0)
    return result
};
