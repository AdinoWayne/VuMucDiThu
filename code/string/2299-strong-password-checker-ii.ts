function strongPasswordCheckerII(password: string): boolean {
    return CRITERIA.every((criteria) => criteria(password));
};

const CRITERIA = [
	(s) => s.length >= 8,
	(s) => /[a-z]/.test(s) && /[A-Z]/.test(s),
	(s) => /\d/.test(s),
	(s) =>
		`"!@#$%^&*()-+".`.split('').some((specialChar) => s.includes(specialChar)),
	(s) => ![...s].some((char, id) => char === s[id + 1]),
];

	
