function kthGrammar(row: number, col: number): number {
    //If we reach to row 1 return 0 (base case)
	if(row==1) return 0;
	
	 // We keep on recusing till we reach to the first row.
	 //    1_2_3_4_5_6_7_8
     //  1|0
	 //  2|0 1
	 //  3|0 1 1 0
	 //  4|0 1 1 0 1 0 0 1
	 //  so how do we get row X  col Y val :-
	 //	 Go to row x-1 , and check its col Y/2 value, repeat this process till we reach 1;
	 
    var last = kthGrammar(row-1,Math.ceil(col/2))
	
	// we look at the previous row and replace each occurrence of 0 with 01 ,so If we get 0 from previous row 
    if(last == 0){
		// and if col is even we return 1 to next calling function
        if(col%2==0) last = 1
    }else{
		// we look at the previous row and replace each occurrence of 1 with 10 ,so If we get 1 from previous row 
		// and if col is even we return 0 to next calling function
        if(col%2==0) last = 0
    }
    return last
};

// Time complexity: O(logN)
// Space complexity: O(logN)
