// NO INDEXES IN SETS

// Typecast an array to a set
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Spaghetti",
  "Pasta",
  "Pizza",
]);

// console.log(orderSet);

// Typecast a string to a set

// console.log(new Set("Rommel"));

// .has() - Similar to includes method in arrays
// console.log(orderSet.has('Pasta'));
// console.log(orderSet.has('Risotto'));
// console.log(orderSet.has('Pizza'));

// .add() - Similar to push method in arrays
// console.log(orderSet.add('Garlic Bread'));
// console.log(orderSet.add('Pasta'));
// console.log(orderSet.add('Lasagna'));

// .delete() - Similar to pop method in arrays
orderSet.delete("Garlic Bread");
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// unpack typecasting
const programmingLanguages = [
  "Python",
  "Java",
  "Python",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "C",
];
console.log(programmingLanguages);

const uniqueLanguages = [...new Set(programmingLanguages)];
console.log(uniqueLanguages);


// Get the length of the set by .size() method 
// and re-instantiate the set

console.log(new Set(uniqueLanguages).size);
