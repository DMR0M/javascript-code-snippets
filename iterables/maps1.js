// Maps in Javascript

// Instantiating a map
const players = new Map();

// Appending to the map
players.set(1, 'RR');
players.set(2, 'Christian');
players.set(3, 'Zyrus');
players.set(4, 'Rojean');

console.log(players);

// Getting a value by key from a map
const MVP = players.get(1);
console.log(MVP);

// Checking if the map contains the key-value pair or key
console.log(players.has(2, 'Christian'));

players.set(5, 'Jasmine');

console.log(players);

// Deleting an entry by specifying the key
players.delete(1);
console.log(players);

// Getting the size of the map
console.log(players.size);
