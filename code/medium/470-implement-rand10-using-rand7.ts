/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
  let i = 7;
  let j = 6;
  while (i > 6) i = rand7(); // i could be 1, 2, 3, 4, 5, or 6
  while (j > 5) j = rand7(); // j could be 1, 2, 3, 4, or 5
  if (i % 2 === 0) { // if i end up being even (50% the chance because it could be 2, 4, 6)
    return j; // return 1, 2, 3, 4, or 5
  } else { //if i end up being odd (also 50% of the chance because it could be 1, 3, 5)
    return j + 5; // return 6, 7, 8, 9, or 10
  }
};
