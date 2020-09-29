// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
  // grades is an array of numbers
  total = 0;
  for(let i = 0; i < grades.length; i++){
    total += grades[i];
  }
  let avg = total/grades.length;
  switch(true){
    case (avg < 60):
      return 'F';
      break;
    case (avg < 70):
      return 'D';
      break;
    case (avg < 80):
      return 'C';
      break;
    case (avg < 90):
      return 'b';
      break;
    case (avg <= 100):
      return 'A';
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));
console.log(getLetterGrade([18, 15, 25, 48, 59, 78, 12, 65]));
console.log(getLetterGrade([98, 95, 95, 98, 99, 78, 92, 95]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
