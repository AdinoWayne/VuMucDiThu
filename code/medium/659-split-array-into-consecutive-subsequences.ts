function isPossible(numbers: number[]): boolean {
    if(numbers.length < 3) {
        return false;
    }

    const occurrences = {};
    const existingSequences = {};

    for (const number of numbers) {
        occurrences[number] = occurrences[number] ? occurrences[number] + 1 : 1;
    }

    for (const number of numbers) {
        if(!occurrences[number]) {
            continue;
        }

        if(existingSequences[number]) {
            occurrences[number]--;
            existingSequences[number]--;
            existingSequences[number + 1] = existingSequences[number + 1] ? existingSequences[number + 1] + 1 : 1;
            continue;
        }

        if(occurrences[number] && occurrences[number + 1] && occurrences[number + 2]) {
            occurrences[number]--;
            occurrences[number + 1]--;
            occurrences[number + 2]--;
            existingSequences[number + 3] = existingSequences[number + 3] ? existingSequences[number + 3] + 1 : 1;
            continue;
        }

        return false;
    }

    return true;
};
