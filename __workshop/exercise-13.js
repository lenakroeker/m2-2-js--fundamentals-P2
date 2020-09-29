// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  var numB = 0;
  if (typeof str === 'string'){
    for (let i = 0; i < str.length; i++){
      if(str[i] == "B"){
        numB += 1;
      } 
    }
    return numB;
  } else {
    return "Not a string";
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
console.log(countBs(34));
console.log(countBs("nbiueh"));

// This is needed for automated testing (more on that later)
module.exports = countBs;
