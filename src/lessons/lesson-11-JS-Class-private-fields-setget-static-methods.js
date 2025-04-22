// const car1 = {
//     band: 'bmw',
//     color: 'black'
// }
// const car2 = {
//     band: 'kia',
//     color: 'red'
// }
// const car3 = {
//     band: 'audi',
//     color: 'blue'
// }

// function carCreator(brand, color){
//     const obj = {}
//     obj.brand = brand
//     obj.color = color
//     obj.startEngine = function () {
//         console.log(`Start ${this.brand}`)
//     }
//     return obj
// }
//
// const car1 = CarCreator('bmw', 'black')
// const car2 = CarCreator('kia', 'red')
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
// car2.startEngine()

// function CarCreator(brand, color) {
//     this.brand = brand
//     this.color = color
// }
//
// CarCreator.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }

// const car1 = new CarCreator('bmw', 'black')
// const car2 = new CarCreator('kia', 'red')
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
// car2.startEngine()

// class Car{
//     constructor(brand,color) {
//         this.brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('kia', 'red')
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
// car2.startEngine()

// class Car {
//     #brand
//     #speed
//     constructor(brand, color, speed) {
//         this.brand = brand
//         this.color = color
//         this.wheels = 4
//         if (this.#validateSpeed(speed)) {
//             this.#speed = speed
//         }
//     }
//     static #validateSpeed(newSpeed) {
//         if (newSpeed < 50) {
//             throw new Error('Is too slow car')
//         }
//         return true
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     getBrand() {
//         // axios get(url)
//         return this.#brand
//     }
//     setBrand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error('Brand is too short')
//         }
//         this.#brand = newBrand.toLowerCase()
//     }
//     get brand() {
//         console.log('getter')
//         return this.#brand
//     }
//     set brand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error('Brand is too short')
//         }
//         this.#brand = newBrand.toLowerCase()
//     }
//     get speed() {
//         return this.#speed
//     }
//     set speed(newSpeed) {
//         if (this.#validateSpeed(newSpeed)) {
//             this.#speed = newSpeed
//         }
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
//
//
//  const car1 = new Car('bmw', 'black')
//
// car1.speed = 30
// //
// //
//  console.log(car1)
// //
// //
// // car1.startEngine()
// //
// // console.log(car1)
// // console.log(car1.getBrand())
// // car1.startEngine()

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