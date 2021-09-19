// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'winter';
season = 'rainy';

// consitions
// 2.1 basic conditions: >, <, ===, !==, <=, >= 

// 2.2 Multiple condition: &&, ||
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold') {

}
else{

}

// 3. array declare
// index, 
// length, push
const numbers = [99, 38, 40, 288];
numbers[0] = 43;

// 4. for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 20);

// 6. Object
// 3 ways to access property by name
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
