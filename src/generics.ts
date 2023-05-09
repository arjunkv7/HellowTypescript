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

//gereric function
function getIndex<T>(items: T[]):T {
    let index = 5;
    return items[index]
}

let getLastUser = <User>(users:Array<User>): User => {
    let lastUser = users.pop()!;
    return lastUser;
}