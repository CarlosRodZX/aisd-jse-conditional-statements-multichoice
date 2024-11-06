// Using 'if' and 'else' to handle two possible conditions 
let weather = 'sunny';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)


} else {
  console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine"
}

// Expanding the logic with 'else if'
weather = 'cloudy'

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)

} else if (weather === 'cloudy') {
  console.log("It might rain, take a jacket!"); // Expected output: "It might rain, take a jacket!"

} else {
  console.log("Enjoy the sunshine!"); // Expected Output: (This will not print because the 'else if' is true)
}

// Corrected order of if, else if, and else blocks

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // This will not print because the condition is false

} else if (weather === 'cloudy') { // else if must come before else
  console.log("It might rain, take a jacket!"); // Expected Output: "It might rain, take a jacket!"

} else {
  console.log("Enjoy the Sunshine!");
}

// Corrected function declaration
const age = 39;

function handleGreeting() { // Added parentheses
  const name = "Carlos";
  console.log(`Hello, ${name}!`);
}
