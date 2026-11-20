// Create an empty array called colors
let colors = [];
//Add three colors to the array using push()
colors.push("red", "blue", "green");
// Create another array called numbers with five numbers
let numbers = [1, 2, 3, 4, 5];
// Remove the last color from the colors array
colors.pop();
// Add a new color to the beginning of the colors array
colors.unshift("orange");
// Print the arrays and their lengths
console.log("color array", colors);
console.log("number array", numbers);
console.log("length of colors", colors.length);
console.log("length of numbers", numbers.length);