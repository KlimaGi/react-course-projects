// arguments objects - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(23, 11, 1221));

// this keyword  - no longer bound
const user = {
  name: "Giedre",
  cities: ["Klaipeda", "Vilnius", "Sofia"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 7, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((x) => x * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
