// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  // list is an array of strings
  return list.every(word => word.length > 4);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
console.log(allLong(["me", "hhhhhe", "gre", "hiohioh", "o", "ji"]));
console.log(allLong(["mevghuj", "grevhj", "ovbhh", "jibjb"]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = allLong;
