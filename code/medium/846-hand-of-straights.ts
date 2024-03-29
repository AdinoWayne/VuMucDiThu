function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false; // minor optimization
    
    hand.sort((a, b) => a - b); // sort hand ascending order
    
    // count of card
    let map = new Map();
    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }
    
    for (let [card, count] of map) {
      if (count > 0) {
	// if count is greater than 0 then check next W - 1 consecutive card.
        for (let i = 1; i < groupSize; i++) {
            if ((map.get(card + i) || 0) < count)  return false;
            map.set(card + i, map.get(card + i) - count);
        }
      }
    }
    
    return true;
};

// Time complexity: O(n)
// Space complexity: O(n)
