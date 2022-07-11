function sortSentence(s: string): string {
    const result = []
    const sArr = s.split(' ')
    
    for(const item of sArr) {
        const index = Number(item[item.length-1]) - 1
        result[index] = item.slice(0, item.length-1)
    }
    
    return result.join(' ')
};
