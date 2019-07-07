const a1 = +prompt('Enter first coordinate а1 of the first point A:');
const a2 = +prompt('Enter second coordinate а2 of the first point A:');
const b1 = +prompt('Enter first coordinate b1 of the second point B:');
const b2 = +prompt('Enter second coordinate b2 of the second point B:');
const c1 = +prompt('Enter first coordinate c1 of the third point C:');
const c2 = +prompt('Enter second coordinate c2 of the third point C:');
const divider = 2;
const middlePoint1 = (a1 + b1) / divider;
const middlePoint2 = (a2 + b2) / divider;

if (middlePoint1 === c1 && middlePoint2 === c2) {
  console.log(true);
} else {
  console.log(false);
}
