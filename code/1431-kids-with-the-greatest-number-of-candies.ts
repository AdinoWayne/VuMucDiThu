function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = 0;
    
    for(let i = 0; i< candies.length; i++)
        {
            max = candies[i] > max ? candies[i] : max;
        }
    
    let result = [];
    for(let i = 0; i< candies.length; i++)
        {
            if(candies[i] + extraCandies >= max)
                {
                    result[i] = true;
                }
            else{
                result[i] = false;
            }
        }
    return result;
};


function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = Math.max(...candies);
    return candies.map(item => item + extraCandies >= max);
};
