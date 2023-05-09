//normal function
function identityOne (val: string | number): string | number {
    return val
}


//generic function
function identityTwo <Type>(val: Type):Type {
    return val
}
identityTwo(2)// 

// we can pass custom types in generics
interface User {
    name:string;
    age: number;
}
let user:User = identityTwo<User>({name:'Arjun',age:21});
console.log(user);
