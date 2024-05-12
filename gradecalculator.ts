// Prompt the user for the marks in math, physics, and chemistry
var math = Number(prompt("Enter your marks in math: "));
var physics = Number(prompt("Enter your marks in physics: "));
var chemistry = Number(prompt("Enter your marks in chemistry: "));

// Calculate the average of the three marks
var average = (math + physics + chemistry) / 3;

// Declare a variable to store the grade
var grade: string = "";

// Use if-else statements to assign the grade based on the average
if (average < 70) {
  grade = "C";
} else if (average >= 70 && average < 90) {
  grade = "B";
} else if (average >= 90) {
  grade = "A";
}

// Display the grade to the user

console.log('Your grade is ',grade);






//sir code of grade calculator

function calculateGrade(math: number, physics: number, chem: number) : string
{
   var avg = (math + physics + chem) / 3;

   if (avg <= 70) {
    return `Grade C (${avg})`
   } else if (avg > 70 && avg < 90) {
    return `Grade B (${avg})`;
   } else {
    return `Grade A (${avg})`;
   }
}

var math = Number(prompt(`Enter the math marks`)); // 80
var physics = Number(prompt(`Enter the physics marks`)) ; // 75
var chem = Number(prompt(`Enter the chem marks`));

console.log(calculateGrade(math, physics, chem));