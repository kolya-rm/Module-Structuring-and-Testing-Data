let width = 3;
let height = 4;

function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(width, height));
console.log();

function capitalizeFirstLetter(name) {
  return name[0].toUpperCase() + name.substring(1);
}

function createGreeting(name) {
  const resultName = capitalizeFirstLetter(name);
  return `Welcome, ${resultName}!`;
}

const greeting = createGreeting('barath');
console.log(greeting);