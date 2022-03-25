function replaceElements(arr: number[]): number[] {
        const n =arr.length;
        let max = arr[n-1];
        arr[n-1] = -1;
        for(let i=n-2;i>=0;i--){
            let temp = arr[i];
            arr[i]=max;
            if(max < temp)
                max = temp;
        }
        return arr;
};
