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
    Age: 23,
    Programming_Languages: ["Javascript", "Java", "Php", "Vb.net"],
    Rank: "Design Engineer 2",
  },
];

const employee_cols = Object.keys(software_engineers);

// for (const col of employee_cols) {
//     console.log(col);
// }

const employee_rows = Object.values(software_engineers[4]);

// for (const col of employee_rows) {
//   console.log(col);
// }

const display = (engineers) => {
  for (let i in engineers) {

    const employee_cols = Object.keys(software_engineers[i]);
    const employee_rows = Object.values(software_engineers[i]);

    employee_cols.forEach((key, i) => {
      if (Array.isArray(employee_rows[i])) {
        const langs = employee_rows[i].join(", ");
        console.log(`${key}: ${langs}`);
      } else {
        console.log(`${key}: ${employee_rows[i]}`);
      }
    });
    console.log("\n");
  }
}

display(software_engineers);


// Keys and Values (Entries) View

const entries = Object.entries(software_engineers);
console.log(entries);

for (const [key, value] of entries) {
  let data = Object.values(value).join(" | ");
  console.log(`${Number(key) + 1}: ${data}`);
}
