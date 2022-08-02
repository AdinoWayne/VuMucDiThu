function bestHand(ranks: number[], suits: string[]): string {
    let areSameSuit = true
    const firstSuit = suits[0]
    for (let i = 1; i < 5; i++) {
        if (suits[i] !== firstSuit) {
            areSameSuit = false
            break
        }
    }
    if (areSameSuit)    return 'Flush'
    const table = new Array(14).fill(0)
    let hasPair = false
    for (const rank of ranks.values()) {
        table[rank]++
        const count = table[rank]
        if (count === 3)  return 'Three of a Kind'
        if (count === 2)  hasPair = true
    }
    if (hasPair)   return 'Pair'
    return 'High Card'
};
