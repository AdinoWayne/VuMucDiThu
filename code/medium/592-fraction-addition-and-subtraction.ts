function fractionAddition(expression: string): string {
	const fractions = expression.split(/[+-]/).filter(Boolean);
	const operator = expression.split(/[0-9/]/).filter(Boolean);
	expression[0] !== '-' && operator.unshift('+');

	const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
	const lcm = fractions.reduce((result, fraction) => {
		const denominator = parseInt(fraction.split('/')[1], 10);
		return result * denominator / gcd(result, denominator);
	}, 1);

	const molecularSum = fractions.reduce((total, fraction, index) => {
		const [molecular, denominator] = fraction.split('/');
		const multiple = lcm / parseInt(denominator, 10) * (operator[index] === '+' ? 1 : -1);
		return total + parseInt(molecular, 10) * multiple;
	}, 0);

	const resultGcd = gcd(Math.abs(molecularSum), lcm);
	return `${molecularSum / resultGcd}/${lcm / resultGcd}`;
};

// lcm Bội số chung nhỏ
// gcd Ước số chung lớn
