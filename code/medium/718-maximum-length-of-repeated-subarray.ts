function findLength(A: number[], B: number[]): number {
    let l1=A.length, l2=B.length, max=0;
    for(let offset=-l2+1; offset<l1; offset++){
    	let l=0;
    	for(let i=Math.max(0,offset); i<l1 && i-offset<l2; i++){
    		if(A[i]===B[i-offset]){
    			l++;
    			max = Math.max(max, l);
    		}
    		else l=0;
    	}
    }
    return max;
};

// Time complexity: O((l1+l2)**2)
// Space complexity: O(1)

// i.e: A[1,2,3,3,2,1], B[3,2,1,7]
// offset(-3):
// ___1,2,3,3,2,1
// 3217
// offset(-2):
// ___1,2,3,3,2,1
// _321,7
// offset(-1):
// ___1,2,3,3,2,1
// __32,1,7
// offset(0):
// ___1,2,3,3,2,1
// ___3,2,1,7
// offset(1):
// ___1,2,3,3,2,1
// ____,3,2,1,7
// offset(2):
// ___1,2,3,3,2,1
// ______,3,2,1,7

// offset(3): (max: 3)
// ___1,2,3,3,2,1
// ________,3,2,1,7
