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

// Order Matters: Switching else and else if statements 
weather = 'cloudy';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)

} else {
  console.log("Enjoy the Sunshine!"); // Expected Output: "Enjoy the sunshine"

} else if (weather === 'cloudy') {
  console.log("It might rain, take a jacket!"); 
}
