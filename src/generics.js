//normal function
function identityOne(val) {
    return val;
}
//generic function
function identityTwo(val) {
    return val;
}
identityTwo(2); // 
var user = identityTwo({ name: 'Arjun', age: 21 });
console.log(user);
