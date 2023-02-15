// Dynamic data types

let a = 2; // integer
console.log(typeof a);

a = 'hello'; // string
console.log(typeof a);

console.log(2 == 2);
console.log('2' == 2);
console.log('2' === 2);
console.log([] == false);
console.log([] === false);
console.log({} == false);


function mult(a, b){
    console.log(a * b);
}
// mult('4', 3);

function sum(a, b){
    console.log(a + b); // '2' + 3 => '2' + '3' => '23'
    return a + b;
}

sum('2', 3);


let user = {
    name: 'User 1',
    age: 20
}

console.log(user.address);


/*
c++
strongly typed programming language
int a = 'hello'; // error

*/

