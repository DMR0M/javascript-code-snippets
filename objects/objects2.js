// Optional chaining

const employees = {
    Name: 'RR',
    Age: 23,
    Languages: ['Python', 'JavaScript'],
    Locations: {
        NCR: ['Quezon City'],
    }
}

const loc = employees.Locations?.Provincial;
console.log(loc);
