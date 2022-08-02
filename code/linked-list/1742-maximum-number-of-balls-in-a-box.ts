function countBalls(lowLimit: number, highLimit: number): number {
	let map = new Map()
	let max = 0

	for(let i = lowLimit; i <= highLimit; i++) {
		let num = i
		let sum = 0

		while(num > 0) {
			sum += num % 10
			num -= num % 10
			num /= 10
		}

		map.set(sum, map.get(sum) + 1 || 1)

		if (map.get(sum) > max) {
			max = map.get(sum)
		}
	}

	return max
};
