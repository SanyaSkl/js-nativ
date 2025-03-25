// статические свойства - определяем при создании объекта

let fruit = {
    color: 'red', // статис=ческом свойству
    smell: 'good'
}

// динамические(вычисляемые) свойства - либо зависят от условий, либо же вычисляются в процессе выполнрения кода (Для
// определения используем квадратные скобки) []: "good"

// function createObj(key, value) {
//     let newObj = {}
//
//     newObj [key] = value
//     return newObj
// }
//
// let res = createObj('fruit', 'apple')
// console.log(res) // {fruit: 'apple'}

// function createObj2 (key, value) {
//     return {
//         [key]: value  // Вычисляемое (динамическое) св-во
//     }
// }
//
// const fruits = createObj2('fruit', 'banana')
// console.log(fruits)

// let obj = {
//     [выражение]: значение, // динамическое (вычисляемое) св-во
//     color: 'red' // статическое св-во
// }

// let property_name = 'age';
//
// const obj = {
//     name: 'John',  // статическое св-во
//     [property_name]: 25 //динамическое св-во
// };
//
// console.log(obj); // { name: 'John', age: 25 }

// const prefix = 'user_';
//
// const person = {
//     [prefix + 'id']: 'sgsf-g343434-fbfd-222',
//     [prefix + 'name']: 'Fred'
// };
//
// console.log(person); // { user_id: 'sgsf-g343434-fbfd-222', user_name: 'Fred' }

// const index = 1;
//
// const res = {
//     [index + 4]: 'four'
// };
//
// console.log(res) //{ '5': 'four' }

// let person = {
//     ['age' + 2]: 32,
//     [2+2]: 4
// };
//
// console.log(person); //{ '4': 4, age2: 32 }

// function createObj3(key, value) {
//     return {
//         [key.toUpperCase()]: value
//     };
// }
//
// const car = createObj3('skoda', 'octavia');
// console.log(car); // { SKODA: 'octavia' }

//1) созданы переменные для каждого статуса

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';
//
// //2) использую вычисляемые св-ва
//
// const STATUS_LABELS = {
//     [STATUS_BUSY]: 'Ожидает',
//     [STATUS_READY]: 'Готов'
// }
//
// // 3) Что происходило с БД
//
// const  drivers = [
//     {
//         name: 'Tom',
//         status: 'busy'
//     },
//     {
//         name: 'Ben',
//         status: 'ready'
//     }
// ];
//
// // 4)
//
// const driversStatuses = drivers.map( (driver) => {
//     const { status } = driver;
//
//     return STATUS_LABELS[status];
// });
//
// console.log(driversStatuses); // [ 'Ожидает', 'Готов' ]

// const user = {
//     id: 1,
//     name: 'Bob',
//     age: 56,
//     social_network: 'linkIn'
// }
//
// const result = Object.keys(user);
// console.log('result keys: ', result) // result keys: [ 'id', 'name', 'age', 'social_network' ]

// const user = {
//     id: 1,
//     name: 'Bob',
//     age: 56,
//     social_network: 'linkIn'
// }
//
// const result = Object.values(user);
// console.log('result values: ', result) // result values:  [ 1, 'Bob', 56, 'linkIn' ]

// const user = {
//     id: 1,
//     name: 'Bob',
//     age: 56,
//     social_network: 'linkIn',
//     current_status: {
//         isMarried: 'No'
//     }
// }
//
// const result2 = Object.values(user);
// console.log('result values2: ', result2) // result values2:  [ 1, 'Bob', 56, 'linkIn', { isMarried: 'No' } ]

// recursion

// const user = {
//     id: 1,
//     name: 'Bob',
//     age: 56,
//     social_network: 'linkIn',
//     country: {
//         city: 'Toronto'
//     }
// };
//
// function getAllKeys(obj) {
//     let keys = Object.keys(obj);
//
//     for(const key of keys) {
//         if(typeof obj[key] === 'object' && obj[key] !== null) {
//             keys = keys.concat(getAllKeys(obj[key]));
//         }
//     }
//
//     return keys;
// }
//
// const result = getAllKeys(user);
// console.log('result ', result); // result  [ 'id', 'name', 'age', 'social_network', 'country', 'city' ]