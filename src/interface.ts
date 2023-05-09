interface isCar {
    model:number
    company: string
    color: string
    price(model:number):number
}

let myCar:isCar
myCar = {
    model: 1,
    company: "Suzuki",
    color: "Red",
    price(number:number):number {
        console.log(number)
        return number;
    }
}

function getCarDetails (details:isCar):void { 
    console.log(`The car name is ${details.company}. The color is ${details.color}, The price is }`)
}
getCarDetails(myCar)