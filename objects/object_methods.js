"use strict";

const software_engineers = [
  {
    Name: "RR",
    Age: 23,
    Programming_Languages: ["Python", "Javascript", "Rust"],
    Rank: "Design Engineer 1",
  },
  {
    Name: "Kevin",
    Age: 23,
    Programming_Languages: ["Java", "Php", "C#", "SQL"],
    Rank: "Design Engineer 3",
  },
  {
    Name: "Pol",
    Age: 23,
    Programming_Languages: ["Java", "Bash", "Linux", "C#"],
    Rank: "Design Engineer 1",
  },
  {
    Name: "Xavi",
    Age: 25,
    Programming_Languages: ["Javascript", "Python", "Typescript"],
    Rank: "Design Engineer 2",
  },
  {
    Name: "Mari",
    Age: 25,
    Programming_Languages: ["Javascript", "Java", "Php"],
    Rank: "Design Engineer 2",
  },
];

// Keys View
const keys = Object.keys(software_engineers[0]);


console.log(keys);
console.log(keys.length);


// Values View
const values = Object.values(software_engineers[0]);

console.log(values);
console.log(values.length);


// Keys and Values (Entries) View

const entry_num = Object.entries(software_engineers[1]);
console.log(entry_num);


for (const entry of Object.entries(software_engineers)) {
    console.log(entry);
}


