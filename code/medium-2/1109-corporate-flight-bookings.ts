function corpFlightBookings(bookings: number[][], n: number): number[] {
  let x;
  let result = [];
  // form an array with n elements
  for (let i = 0; i < n; ++i) {
    result.push(0);
  }

  //Loop through the bookings array and +/- ticket numbers
  for (let e of bookings) {
    //   1 (+10)    2 (+20)(+25)   3 (-10)    4 (-20)  5     6(-25)

    result[e[0] - 1] += e[2];
    result[e[1]] -= e[2];
  }

  //remove the last element (n+1), which we don't need
  if (result.length > n) {
    result.splice(-1);
  }

  //change the element inside the result array = result[i] = result[i-1] + result[i]
  for (let i = 1; i <= result.length - 1; ++i) {
    x = result[i] + result[i - 1];
    result[i] = x;
  }
  return result;
};

// Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
// Output: [10,55,45,25,25]
// Explanation:
// Flight labels:        1   2   3   4   5
// Booking 1 reserved:  10  10
// Booking 2 reserved:      20  20
// Booking 3 reserved:      25  25  25  25
// Total seats:         10  55  45  25  25
// Hence, answer = [10,55,45,25,25]

// TC O(n)
// SC o(n)
