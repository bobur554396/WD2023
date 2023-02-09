console.log('hello from html file');

// line comment 

/*
multi 
line 
comment
*/


// Data types
console.log(typeof(2));
console.log(typeof(2.5));
console.log(typeof('hello'));
console.log(typeof('h'));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof({'id': 2}));
console.log(typeof(function(){}));
console.log(typeof(Symbol('c')));


// Variables
// CamelCase

// myFirstVar

// using "var"
console.log(a); // undefined
var a = 2;
console.log(a);
a = 'hi';
console.log(a);


// using "let"
let b = 3;
console.log(b);
b = "kbtu";
console.log(b);

// using "const"
const n = "fit";
console.log(n);
// n = 2; // error


let school = 'site';
let student = {
    'id': '20BD123123',
    'name': 'Student 1',
    gpa: 3.8,
    age: 20,
    // school: school
    school
};

console.log(student);
console.log(typeof(student));

if(student.gpa > 3.5){
    console.log('ok');
} else {
    console.log('not ok');
}


// Loop
let arr = [2, 3, 4, 5];
console.log(typeof(arr));
// console.log(arr);

// Example 1
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(i); // errro


// Example 2
// for (const num of arr) {
//     console.log(num);
// }


// Example 3
// function show(num){ // named function
//     console.log(num);
// }
// arr.forEach(show);

// arr.forEach(function(num) { // anonymous function
//     console.log(num);
// });

// Using arrow function
// arr.forEach(num => {
//     console.log(num);
// });

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);

//     i++;
// }


function mult(a, b){
    return a * b;
}
// let newArr = arr.map(mult);

// let newArr = arr.map(function(value, index){
//     return value * index;
// });

let newArr = arr.map((value, index) => value * index);

console.log(arr);
console.log(newArr);







