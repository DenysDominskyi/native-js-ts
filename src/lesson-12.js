// __proto__, prototype
// У каждого объекта в JS есть свойство __proto__. Prototype это тоже объект который есть у функции конструкции или класа 

class Car{
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`${this.brand} is started`)
    }
    stopEngine = () => {
        console.log(`${this.brand} is stopped`)
    }

    static compareCars(car1, car2) {
        car1.maxSpeed > car2.maxSpeed
            ? console.log(`${car1.brand} is faster`)
            : console.log(`${car2.brand} is faster`)
    }
}

class SuperCar extends Car {
    constructor(brand, canFly) {
        super(brand)
        this.canFly = canFly
    }
    fly(){
        console.log(`${this.brandForSuperCar} is flying`)
    }
}

const car1 = new Car('bmw', 200)
const car2 = new Car('bmw', 200)

console.log(car1)
// console.log(car1.brand === car2.brand)
// console.log(car1.startEngine === car2.startEngine)
// console.log(car1.stopEngine === car2.stopEngine)

// console.log(Car.__proto__ === Function.prototype)

// console.log(Function.__proto__ === Function.prototype) //true

// console.log(car1.__proto__ === Car.prototype)
// console.log(car1.__proto__.__proto__ === Object.prototype)
// console.log(car1.__proto__.__proto__.__proto__ === null)

const superCar1 = new SuperCar('superBmw', 300)

// console.log(superCar1.__proto__ === SuperCar.prototype)
// console.log(superCar1.__proto__.__proto__ === Car.prototype)
// console.log(superCar1.__proto__.__proto__.__proto__ === Object.prototype)
// console.log(superCar1.__proto__.__proto__.__proto__.__proto__ === null)


