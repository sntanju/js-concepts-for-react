/*

1.1 variable (let, const) three types variable
1.2 condition (<, >, !==, ===, <==, >==) &&, ||, if-else
1.3 array: declare, length, index, push, pop, indexOf, includes
1.4 for loop, while loop
1.5 function return parameter
1.6 object property, including array, object

---------------------
ES6
1. templete string ${}
2. spread (...) 
2.1 copy an array and then add a new element to an array
2.2 use filter to remove an element from an array

3. Arrow function
3.1 no parameter ()
3.2 single parameter
3.3 multiple parameters ()
3.4 multi line

4. Destructuring : object destructuring and array destructuring
5. object  declaration shorthand
6. function parameter default value
7. Optional chaining (?.)
 
------------------------
Browser API
1. local storage session storage
2. location API
3. history API
4. fetch
-------------------------
others
1.array: map, forEach, filter, find
2. ternary operator
3. logical and logical or && ||
4. JSON (stringify, parse)
5. +, 
*/

const x = 50; 
const y = 100;
const obj = { 
    x: x,
    y: y
};

// shorthand
const obj1 = {x, y}
const name = 'Abcd';
const area = 'dahka';

const nobab = {
    name: name,
    area: area
}

const nobab2 = {name, area}