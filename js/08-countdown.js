var start = parseInt(prompt("Enter a number to count down from:"), 10);
var i;

if (isNaN(start)) {
  console.log("Please refresh and enter a valid number.");
} else {
  for (i = start; i >= 0; i--) {
    console.log(i);
  }
}
