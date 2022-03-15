function isAlienSorted(words: string[], order: string): boolean {
    let alpha = new Map([["",-1]])
    for (let i = 0; i < order.length; i++)
        alpha.set(order.charAt(i), i)
    for (let i = 1; i < words.length; i++) {
        let a = words[i-1], b = words[i]
        for (let j = 0; j < a.length; j++) {
            let achar = a.charAt(j), bchar = b.charAt(j),
                aix = alpha.get(achar), bix = alpha.get(bchar)
            if (aix < bix) break
            if (aix > bix) return false
        }
    }
    return true
};
