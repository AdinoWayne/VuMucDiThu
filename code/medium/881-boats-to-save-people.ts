function numRescueBoats(people: number[], limit: number): number {
    people = people.sort((a, b) => b - a);
    let i = 0, j = people.length-1;
    let count = 0;
    while (i <= j) {
        if (people[i] + people[j] <= limit) j--;
        i++;
        count++;
    }
    return count;
};

// Time complexity: O(nlogn)
// Space complexity: O(1)
