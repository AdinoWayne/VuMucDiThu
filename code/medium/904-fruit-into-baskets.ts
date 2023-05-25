function totalFruit(fruits: number[]): number {
    const hashMap = new Map();
    let left = 0, maxLen = 0;
	for (let right = 0; right < fruits.length; right++) {
		const rightFruit = fruits[right];
        hashMap.set(rightFruit, hashMap.get(rightFruit) + 1 || 0);
        while (hashMap.size > 2) {
            const leftFruit = fruits[left];
            if (hashMap.get(leftFruit) === 0) {
                hashMap.delete(leftFruit);
            } else {
                hashMap.set(leftFruit, hashMap.get(leftFruit) - 1);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
