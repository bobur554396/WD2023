let a: number;
a = 2;
// a = 'hello'; // error

interface User {
    name: string;
    age: number;
}

let user1: User = {
    name: 'User 1',
    age: 20
};

console.log(user1.name);
// console.log(user1.address); error


/*
C++
int sum(int n1, int n2){
    return n1 + n2;
}
*/
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(sum(2, 3));





function greeting(user: User){
    console.log(`Hi ${user.name}`);
}

greeting(user1);


