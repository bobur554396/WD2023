let a = [1, 2, 3, 4];
console.log(typeof(a));
a.push(5);
a.pop();

// console.log(a);
// console.log(a.indexOf(22));
// console.log(a.includes(2));


// Loop 1
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
//     // var num = 2;
// }

// var num = 3;
// console.log(i);


// Loop 2
// for(const num of a){
//     console.log(num);
// }


// Loop 3
function showNumber(number){ // named function
    console.log(number);
}
// a.forEach(showNumber);
// a.forEach(function(num){ // anonymous function
//     console.log(num);
// });


// let num = a.find(function(num) {
//     return num == 3;
// });

// console.log(num);

// a.push(-10);
// console.log(a);
// a.sort();
// console.log(a);

// let b = a.slice(1, 3);
// console.log(a);
// console.log(b);


// console.log(a);
// let b = a.splice(1, 3);
// console.log(a);
// console.log(b);


console.log(a);
// let b = a.map(function(number, index) {
//     return number * index;
// });

// Arrow functions
let b = a.map((number, index) => number * index);
console.log(b);


