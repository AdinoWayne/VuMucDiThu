function pushDominoes(dominoes: string): string {
    dominoes = "L" + dominoes + "R"; 
    const arr = dominoes.split(''), n = dominoes.length;

    for (let l = 0, r = 1; r < n; r++) {
        if (arr[r] === ".") continue;

        if (arr[r] === "L" && arr[l] === "R")
            for (let i = l+1, j = r-1; j-i && i < j; i++, j--)
                arr[i] = "R", arr[j] = "L";

        // handle both corner cases
        if (arr[l] === arr[r])
            for (let i = l; i < r; i++)
                arr[i] = arr[r];

        l = r;
    }

    return arr.slice(1, n-1).join('');
};

// Time complexity: O(n)
// Space complexity: O(n)
