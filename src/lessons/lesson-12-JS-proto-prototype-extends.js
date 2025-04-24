// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//         this.state = {}
//     }
//     startEngine = function () {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmw', 250)
// const car2 = new Car('kia', 200)
//
// const car3 = {
//     brand: 'toyota'
// }
//
// car1.startEngine.bind(car3)()
// car1.stopEngine.bind(car3)()

// __proto__ | __prototype__


// class Car {
//
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//         this.state = {}
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmw', 250)
// const car2 = new Car('bmw', 250)


// console.log(car1 === car2) //false
// console.log(car1.brand === car2.brand) //true
// console.log(car1.state === car2.state) //false
// console.log(car1.startEngine === car2.startEngine) //true
// console.log(car1.stopEngine === car2.stopEngine) //false


//----------------------------------------------------------------

// console.log(car1.__proto__ === Car.prototype) // true
//
// const  arr = new Array()
// console.log(arr.__proto__ === Array.prototype) // true
//
// const arr2 = []
// console.log(arr2.__proto__ === Array.prototype) // true

// const obj = {}
// console.log(obj.__proto__ === Object.prototype)  // true
//
// const str1 = 'string'
// const str2 = String('String')
// console.log(str1 + str2)  // stringString
//
// console.log(str2) // String
// console.log(str1 === str2) // false
// console.log(str2.__proto__ === String.prototype) // true
// console.log(str1 === str2) // false

// console.log(Array.__proto__ === Function.prototype) // true
// console.log(Object.__proto__ === Function.prototype) // true
// console.log(Number.__proto__ === Function.prototype) // true
// console.log(Function.__proto__ === Function.prototype) // true

// console.log(car1.__proto__ === Car.prototype) // true
// console.log(Car.prototype.__proto__ === Object.prototype) // true
// console.log(car1.__proto__.__proto__.__proto__) // null

// class Car {
//     constructor(brand, color, speed) {
//         this.brand = brand
//         this.color = color
//         this.speed = speed
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     static compareCars(car1, car2) {
//         if (car1.speed > car2.speed) {
//             console.log(`${car1.brand} is faster than ${car2.brand}`)
//         } else {
//             console.log(`${car2.brand} is faster than ${car1.brand}`)
//         }
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('kia', 'red')
//
// class SuperCar extends Car{
//     constructor(brand, color, speed, canFly) {
//         super(brand, color, speed)
//     this.canFly = canFly
//     }
//     fly() {
//         console.log(`${this.brand} is flying`)
//     }
//     startEngine() {
//         //console.log(`Start ${this.brand}`)
//         super.startEngine()
//         console.log('!!!!!')
//     }
// }
//
// const superCar1 = new SuperCar('superBmw', 'blue', 400, true)
// const superCar2 = new SuperCar('superKia', 'red', 440, true)
//
// superCar1.fly()
// superCar1.startEngine()
// SuperCar.compareCars(superCar1, superCar2)

// -------------------------------------------------------------

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//
//     stopEngine = function () {
//         console.log(`Stop ${this.brand}`)
//     }
//
//     static compareCars(car1, car2) {
//         if (car1.speed > car2.speed) {
//             console.log(`${car1.brand} is faster than ${car2.brand}`)
//         } else {
//             console.log(`${car2.brand} is faster than ${car1.brand}`)
//         }
//     }
// }
//
// class SuperCar extends Car {
//     constructor(brand, speed, canFly) {
//         super(brand, speed)
//         this.canFly = canFly
//     }
//
//     fly() {
//         console.log(`${this.brand} is flying`)
//     }
// }
//
// // ---------------------------------------------------
//
// function CarCreator(brand, speed) {
//     this.brand = brand
//     this.speed = speed
//     this.stopEngine = function () {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// CarCreator.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }
//
// CarCreator.compareCars = function (car1, car2) {
//     if (car1.speed > car2.speed) {
//         console.log(`${car1.brand} is faster than ${car2.brand}`)
//     } else {
//         console.log(`${car2.brand} is faster than ${car1.brand}`)
//     }
// }
//
// const car1 = new CarCreator('bmw', 240)
// const car2 = new CarCreator('kia', 220)
// CarCreator.compareCars(car1, car2)
//
// function SuperCarCreator(brand, speed, canFly) {
//     CarCreator.call(this, brand, speed)
//     this.canFly = canFly
// }
//
//  SuperCarCreator.prototype.fly = function () {
//      console.log(`${this.brand} is flying`)
//  }
//
//  const superCar = new SuperCarCreator('superKia', 420, true)
//
// // SuperCarCreator.prototype.__proto__ = CarCreator.prototype
// // SuperCarCreator.__proto__ = CarCreator
//
// Object.setPrototypeOf(SuperCarCreator.prototype, CarCreator.prototype)
// Object.setPrototypeOf(SuperCarCreator, CarCreator)
//
// superCar.startEngine()
// SuperCarCreator.compareCars(car1, superCar)
