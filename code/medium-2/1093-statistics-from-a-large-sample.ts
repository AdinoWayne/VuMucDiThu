function sampleStats(count: number[]): number[] {
    // analysis
    // mode --> find max count[k] and return index as element  
    // detect if it is even or odd depending on the expanded form
    // minimum --> find the least non zero element
    // maximum --> find the last non zero element
    // mean --> average of all non zero elements / length of non zero elements
    // median --> it is calculated on the expanded form

    let mode=0;
    let minimum=0;
    let maximum=0;
    let mean=0;
    let median=0;
    let max = 0;
    let sumNumElements = 0;
    let sumNumOfTimes = 0;

    // The array transformed will contain any non zero element in the form of objects. Each object will contain the number of times of an element k and
    // the value of the element k. The same loop is also used to calculated the mode element, sumOfNumTimes and how many non zero elements exists.
    // These values will be used later to calculate the mean value
    const transformed = 
    count.map((numOfTimes, element) => {
        if(numOfTimes > max) {
            max = numOfTimes;
            mode = element;
        }

        if (numOfTimes !== 0) {
            sumNumElements += numOfTimes * element;
            sumNumOfTimes += numOfTimes;
        }

        return ({
            element,
            numOfTimes,
        })  
    })
    .filter(item => item.numOfTimes !== 0);

    minimum=transformed[0].element;
    maximum=transformed[transformed.length - 1].element;
    mean = sumNumElements / sumNumOfTimes;

    // find median
    
    // At first we could create the expanded form but this would increase the time complexity from O(n) to O(n*2)

    // So we should avoid that and find a way to perform any computation to the transformed array to keep the time complexity to O(n)
    // In order to do that we divide by two the sumNumOfTimes and we get the floor value of it.
    // We loop over the transformed array and get the sum of the times of each element occur
    // It is noticed that for odd sumOfNumOfTimes the median is the element at the i when the curTimes surpasses the half of the sumNumOfTimes
    // So we return this value as median and break the for loop to avoid extra iterations.

    // Similarly for even it is noticed that if curTimes equals the halfSumNumOfTimes then we get the half of the sum between the element before and the 
    // current element. If the curTimes is greater we return just the element from the transformed array. This works because in the expanded form 
    // there would be an area of the same values where the range of area should be larger than two. So in the reality what happens is this calculation
    // (A + A) / 2 == 2*A/2 = A where A is the current element. Since we find the median we break the for loop to avoid extra iterations

    let isEven = sumNumOfTimes % 2 === 0;
    let isOdd = sumNumOfTimes % 2 !== 0;

    let halfSumNumOfTimes = Math.floor(sumNumOfTimes / 2);

    let curTimes=0;
    for (let i=0; i<transformed.length; i++) {
        curTimes += transformed[i].numOfTimes;

        if (isOdd) {
            if (curTimes > halfSumNumOfTimes ) {
                median = transformed[i].element;
                break;
            }
        }
        
        if (isEven) {
            if (curTimes === halfSumNumOfTimes ) {
                median = (transformed[i].element + transformed[i + 1].element) / 2;
                break;
            } 
            
            if (curTimes > halfSumNumOfTimes ) {
                median = transformed[i].element;
                break;
            }

        }

    }

  return [minimum, maximum, mean, median, mode];
};
// TC O(nlogn)
// SC O(n)
