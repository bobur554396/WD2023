var a;
a = 2;
var user1 = {
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
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(2, 3));
function greeting(user) {
    console.log("Hi ".concat(user.name));
}
greeting(user1);
