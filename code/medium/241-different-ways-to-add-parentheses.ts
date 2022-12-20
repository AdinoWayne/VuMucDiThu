function diffWaysToCompute(expression: string): number[] {
	const map = new Map();
	const operator = ['+', '-', '*'];
	const calculate = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
	};
	const compute = (express = expression) => {
		if (map.has(express)) return map.get(express);
		const result = [];

		for (let index = 0; index < express.length; index++) {
			const currStr = express[index];
			if (!operator.includes(currStr)) continue;
			const left = compute(express.slice(0, index));
			const right = compute(express.slice(index + 1));

			left.forEach(valueL => {
				right.forEach(valueR => {
					const value = calculate[currStr](valueL, valueR);

					result.push(value);
				});
			});
		}
		result.length === 0 && result.push(+express);
		map.set(express, result);
		return result;
	};

	return compute();
};
