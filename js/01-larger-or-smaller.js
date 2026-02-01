
var a = parseInt(prompt("Enter first number:"), 10);
var b = parseInt(prompt("Enter second number:"), 10);

if (isNaN(a) || isNaN(b)) {
  document.write("Enter valid integers.");
} else {
  if (a > b) {
    document.write(a);
  } else if (b > a) {
    document.write(b);
  } else {
    document.write("The numbers are equal.");
  }
}
