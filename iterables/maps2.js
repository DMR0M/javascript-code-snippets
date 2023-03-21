
const questions = new Map([
  [1, 'What programming language is widely used for data science?'],
  [2, 'What is considered a database language?'],
  [3, 'What is the most loved programming language?'],
  [4, 'What is the programming language of the web?']
]);

const choices = new Map([
  [1, ['Java', 'C', 'Python', 'C#']],
  [2, ['C++', 'C', 'SQL', 'MySQL']],
  [3, ['C', 'Fortran', 'Rust', 'Javascript']],
  [4, ['Java', 'Javascript', 'Python', 'HTML/CSS']],
]);

const answers = new Map([
  [1, 'Python'],
  [2, 'SQL'],
  [3, 'Rust'],
  [4, 'Javascript']
]);


[[questions], [choices], [answers]].forEach((m, i) => {
    console.log(m);
});
