// Example 1
let addition : (numOne:number, numTwo: number) => number

addition = (a : number, b: number) => {
    console.log(a * b)
    return a * b
}

addition(10,6)

// Example 2
let fullName : Function
fullName = (firstName: string, lastaName: string):string => {
    console.log(`full name is ${firstName} ${lastaName}`)
    return firstName + lastaName
}

fullName('Arjun', 'K V')