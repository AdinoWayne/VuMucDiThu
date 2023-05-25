function matrixScore(grid: number[][]): number {
	let flippedRows = grid.map(item => {
		if(!item[0]) return item.map(item => item===1 ? 0 : 1);
		return item;
	})
	let index=0;
	let sum=0;

	while(index <= flippedRows[0].length-1) {
		for(let i=0; i<flippedRows.length; i++) {
			let item = flippedRows[i];
			sum+=item[item.length-index];
		}
		if(sum<Math.ceil(flippedRows.length/2)) {
			for(let i=0; i<flippedRows.length; i++) {
				let item = flippedRows[i];
				let newValue =  item[item.length-index] === 1 ? 0 : 1;
				item.splice(item.length-index, 1, newValue);
			}
		} 
		sum=0;
		index++;
	}
	let res = flippedRows
	.map(item => item.join(''))
	.map(item => parseInt(item,2))
	.reduce((acc,val) => acc+val);
	return res;
};

// Time complexity: O(N * M)
// Space complexity: O(N * M)
