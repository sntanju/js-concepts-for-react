const numbers = [99, 38, 40, 288];
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// 1. templete string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const newNumbers = numbers;
numbers.push(100);
console.log(newNumbers);



// create a new array from an older array and add an element

const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
