// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  total = 0
  for(let i = 0; i <grades.length; i++){
    total += grades[i];
  }
  return Math.round(total / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
console.log(calculateAverage([23, 56, 87, 12, 99, 12, 34]));
console.log(calculateAverage([23, 56, 87, 99, 99, 98, 34]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
