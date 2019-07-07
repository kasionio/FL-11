const a = +prompt('Enter the first length of the triangle side a');
const b = +prompt('Enter the second length of the triangle side b');
const c = +prompt('Enter the third length of the triangle side c');

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  console.log('Length must have a positive numeric value');
} else if (a + b <= c || a + c <= b || b + c <= a) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Equivalent triangle');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
