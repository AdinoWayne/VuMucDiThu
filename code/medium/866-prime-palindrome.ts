function primePalindrome(N: number): number {
	if(N<=2) return 2;
	let cur = N;
	while(!isPal(cur)) cur++;
	// eslint-disable-next-line no-constant-condition
	while(true){
		if(isPrime(cur)) return cur;
		cur = nextPal(cur);
	}
};
function isPal(n){
	return (''+n)===(''+n).split('').reverse().join('');
}
function nextPal(n){
	let s = (''+n), len = s.length, half = Math.ceil(len/2);
	let left=s.slice(0,half);
	let tmp = (+left+1)+'';
	if(half===len-half){
		return +(tmp+tmp.slice(0,half).split('').reverse().join('')); //66->77 99->101
	}else{
		if(tmp.length===half) return +(tmp+tmp.slice(0,len-half).split('').reverse().join(''));// 888->898
		else return +(tmp.slice(0,half)+tmp.slice(0,half).split('').reverse().join(''));// 999->1001
	}
}
function isPrime(n){
	if(n%2===0) return false;
	for(let i=3; i*i<=n; i+=2){
		if(n%i===0) return false;
	}
	return true;
}

// Time complexity: O(n)
// Space complexity: O(1)
