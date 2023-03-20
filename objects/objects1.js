

// MLBB Players object
let players = {
  player_1: {
    Name: "RR",
    Stats: {
      map_awareness: 7,
      aggression: 7,
      mechanics: 7,
      tactics: 8,
    },
    IGN: "Denji",
    Age: 23,
    Roles: ["Jungle", "Gold Lane"],
  },
  player_2: {
    Name: "Mari",
    Stats: {
      map_awareness: 9,
      aggression: 8,
      mechanics: 8,
      tactics: 8,
    },
    IGN: "RiriMari",
    Age: 23,
    Roles: ["Mid Lane"],
  },
  player_3: {
    Name: "Rojean",
    Stats: {
      map_awareness: 8,
      aggression: 8,
      mechanics: 6,
      tactics: 8,
    },
    IGN: "Yuna",
    Age: 18,
    Roles: ["Mid Lane"],
  },
};

let sample = [
  {
    Name: "RR",
    Age: 23,
    Is_Male: true,
    Score: 0,
  },
  {
    Name: "Mari",
    Age: 23,
    Is_Male: false,
    Score: 0,
  },
];

// Nullish Coalescing

console.log(sample);

sample[0].Location ??= 'Pasig City';
sample[0].Name ??= 'Rommel';
sample[0].Score ??= 15;

// Short Circuiting
sample[1].Score ||= 15;

console.log(sample);




// console.log(players.player_1);

// // Nullish Coalescing
// players.players_1[Location] ??= "Pasig City";
// console.log(players.player_1);


// console.log(players.player_2);

// // Nullish Coalescing
// players.players_2[Location] ??= "Taytay";
// console.log(players.player_2);
