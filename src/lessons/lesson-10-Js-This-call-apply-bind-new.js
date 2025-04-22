// 1. --------------Global scope----------------------
// *******  В Global scope 'this' всегда ссылается на глобальный объект (Window) не зависимо от режима строгий\не строгий  ******

// 'use strict';
// console.log(this);

// 2. ---------------Function -> arrow function || simple function ------------------------------

//arrow function

// ******  в стрелочной функции нет своего this, поэтому она ссылается на глобальное окружение места инициализации
// или на место куда ссылаетсяб например функция в которой бала создана стрелочная функция  ******

// const arrowFunc = () => {
//     console.log(this)
// }
//
// arrowFunc()

// *****  в обычной функции this ссылается на то место где вызывается функция(и ссылается на то что слева от точки)  ********
// *****  если в строгом режиме то будет undefined, если слева от точки пусто, не в строгом на глобальное лексическое окружение  ******

// 'use strict'

// function foo() {
//     console.log(this)
// }
//
// foo()

// let car = {
//     brand: 'bmw',
//     startEngine() {
//         console.log(`start ${this.brand}`)
//     }
// }
//
// const car2 = car
// car = null
//
// car2.startEngine()

// function startEngine() {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f()
// car2.f()

// let car = {
//     brand: 'bmw',
//     startEngine: () => {
//         console.log(`start ${this.brand}`)
//     }
// }
//
// car.startEngine()

// 3. ---------------call, apply, bind ------------------------------

// const car = {
//     brand: 'bmw',
//     startEngine() {
//         console.log(`start ${this.brand}`)
//     }
// }
//
// const scooter = {
//     brand: 'honda'
// }
//
// car.startEngine.call(scooter)

// const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed + a + b)
//     }
// }
//
// const scooter = {
//     brand: 'honda',
//     speed: 60
// }
//
// const ferrari = {
//     brand: 'ferrari',
//     speed: 300
// }

// car.showMaxSpeed.call(scooter, 10, 20)                  // call - передаются параметры через запятую.
// car.showMaxSpeed.apply(scooter, [10, 20])               // apply - передаются параметры через массив.

// car.showMaxSpeed.bind(scooter, 10, 20)()                  // bind - добавляет функцию обертку, можно вызвать как функцию с привязанным this,
// либо через созт дания новой  переменной либо просто подставив (), к этой строке.
// car.showMaxSpeed.bind(scooter).call(ferrari)              // bind нельзя переписать другим методом.

// const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         console.log(this.speed)
//     }
// }

//setTimeout(car.showMaxSpeed(car), 2000)

// setTimeout(() => {
//     car.showMaxSpeed()
// }, 2000)

////  function setTimeout(callback, delay){
////  delay
////  callback() () => car.showMaxSpeed()
////  }

// 4. ------------------- Function constructor -------------------

// const car1 = {
//     brand: 'bmw'
// }
//
// const car2= {
//     brand: 'kia'
// }
//
// const car3 = {
//     brand: 'audi'
// }

// function CarCreator(brand){
//     // {}
//     this.brand = brand  // {brand: 'bmw'}
//     // return {brand: 'bmw'}
// }
//
// const car1 = new CarCreator('bmw')
// const car2 = new CarCreator('kia')
// const car3 = new CarCreator('audi')
//
// console.log(car1, car2, car3)


