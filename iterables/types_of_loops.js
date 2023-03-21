'use strict';

// El Classico Loop
function std_loop(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// For Of Loop
function for_of_loop(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum;
}

// For In Loop
function for_in_loop(...nums) {
    let sum = 0;
    for (let i in nums) {
        sum += nums[i];
    }
    return sum;
}

// Foreach Loop
function for_each_loop(...nums) {
    let sum = 0 
    nums.forEach(n => {
        sum += n;
    });
    return sum;
}


// console.log(std_loop(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(for_of_loop(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(for_in_loop(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(for_each_loop(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// For Loops with element and index


// Initial Array
let numbers = [1, 2, 3, 4];

// For Of Loop w/ index
function for_of_loop_index(nums) {
    let sum = 0;
    for (const [idx, ele] of nums.entries()) {
        console.log(`Iteration: ${idx+1}\n Adding ${ele} to sum...`)
        sum += ele;
    }
    return `Total sum: ${sum}`;
}


// console.log(for_of_loop_index(numbers));


// Foreach Loop w/ index
function for_each_loop_index(nums) {
  let sum = 0;
  nums.forEach((ele, idx) => {
    console.log(`Iteration: ${idx + 1}\n Adding ${ele} to sum...`);
    sum += ele;
  });
  return `Total sum: ${sum}`;
}


// console.log(for_each_loop_index(numbers));


// Predicate Function
const square_num = (n) => {
    return n**2;
}

// For each loop with function
function for_each_combo_1(nums) {
    let sum = 0;
    nums.forEach((n) => {
        sum += square_num(n);
    });
    return sum;
}


// For each loop with function and logging
function for_each_combo_2(nums) {
    let sum = 0;
    nums.forEach((ele, idx) => {
        console.log(`Iteration: ${idx + 1}`);
        sum += square_num(ele)
        console.log(`Adding ${sum} to sum...`);
    });
    return sum;
}

console.log(for_each_combo_1(numbers));
