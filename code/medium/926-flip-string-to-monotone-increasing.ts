function minFlipsMonoIncr(s: string): number {
    let counter_one = 0;
    let counter_flip = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '0') {
            counter_flip = Math.min(counter_flip + 1 /* flip this '0' to '1' */,
                        counter_one /* flip all '1' we've seen before to '0'*/);
        } else {
            // s[i] is '1'
            counter_one++;
        }
    }
    return counter_flip;
};
// Char=='1'
// It will not impact our minimum flips just keep the record of count of 1
// Char=='0'
// Here will be 2 cases
// Keep is as 0 and flip all the 1 so far ,for that we need to know about the count the one so far
// Flip it to 1 and update our count_flip

// Time complexity: O(n)
// Space complexity: O(1)
