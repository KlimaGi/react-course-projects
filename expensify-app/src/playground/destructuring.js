// ------ Object destructuring

// const person = {
//   name: "Giedre",
//   age: 32,
//   location: {
//     city: "Vilnius",
//     temp: -1,
//   },
// };

// const { name: firstName = "Anonymus", age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName); // Self-Published
//
//
// ------- Array destructuring

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147",
// ];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);

// other destructuring example
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));

// destructuring objects
// const user = {
//   name: "Jen",
//   age: 24,
// };

// console.log({ age: 27, ...user, location: "Vilnius" }); //result age:24, next item ..user overrides age
// console.log({ ...user, location: "Vilnius", age: 27 }); // result age:27, next item with same name overrides value
