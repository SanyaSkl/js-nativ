// push(), pop(), shift(), unshift(), reverse() - мутирующие (изменяют исходный массив)

//push() - добавляет 1 или более элементов в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('Mark', 'Anna', 'Olga');
//
// console.log("names:", names);  // names: ['Alex', 'Bob', 'Ivan', 'Sasha', 'Mark', 'Anna', 'Olga']
// console.log("result:", result) // result: 7

//pop() - удаляет последний элемент массива и возвращает его

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // ['Alex', 'Bob', 'Ivan']
// const poppedResult = names.pop(); // poppedResult: Sasha
//
// console.log("names: ", names);
// console.log("poppedResult: ", poppedResult);

// shift() - удаляет первый элемент массива и возвращает его

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // ['Bob', 'Ivan', 'Sasha']
// const shiftResult = names.shift(); // Alex
//
// console.log("names: ", names);
// console.log("shiftResult: ", shiftResult);


////////////// при использовании методов pop() и shift() на пустом массиве они возвращают undefined////////////////
// const names = []
// const result = names.pop // undefined
// const result = names.shift // undefined
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// unshift() - добавляет 1 или нескколько элементов в начало массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // ['Olga', 'Anna', 'Alex', 'Bob', 'Ivan', 'Sasha']
// const unshiftResult = names.unshift('Olga', 'Anna'); // 6
//
// console.log("names: ", names);
// console.log("unshiftResult: ", unshiftResult);

// revers () - меняет порядок элементов в массиве на обратный

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // ['Sasha', 'Ivan', 'Bob', 'Alex']
//
// const namesCopy = [ ...names ];  //иммутабельная работа с массивом (создание копии)
// const  resultRevers = namesCopy.reverse()
//
// console.log("names: ", names);
// console.log("resultRevers: ", resultRevers);

// split() {не мутирующий} - метод для работы со строками, преобразует строку в массив, с выбранным разделителем

// const str = 'ab-cd-ef';       // ab-cd-ef
// const res = str.split('-');    // ['ab', 'cd', 'ef']
// const resParam = str.split('-', 2) //вторым параметром можно указать сколько элементов будет в массиве
//
// console.log('str: ', str)
// console.log('result: ', res);
// console.log('result: ', resParam);

// join() - объединяет массив элементов в строку через указанный разделитель

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // ['Alex', 'Bob', 'Ivan', 'Sasha']
// const res = names.join('-'); // Alex-Bob-Ivan-Sasha
//
// console.log('names: ', names);
// console.log('result: ', res);



//////////////////////////////////// пример: сделать reverse строки ////////////////////////////////

// const tel = "123456789"
// const result = tel.split('').reverse().join('');
//
// console.log('result: ', result);

///////////////////////////////////////////////////////////////////////////////////////////////////

// concat() - используется для объединения массивов

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
//
// const res = arr1.concat(arr2, arr3);
//
// console.log(res);

// flat() - если пустой, расскрывает один уровень вложенности

// const arr1 = [1, 2, 3, [4, 5, 6,[7, 8, 9]]];
// const arr2 = [16, 17, 18,19, 20, 21];
// const arr3 = [22, 23, 24];
//
// const res = arr1.concat(arr2, arr3);
//
// console.log('res: ', res);
//
// const res1 = res.flat();
// console.log('res1: ', res1);
//
// const resInfinity = res.flat(Infinity);

//console.log('resInfinity: ' resInfinity)

// forEach() - Array.foEach(function(el, index, array) {
//  код для выполнения
// }

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// arr.forEach(function(elem) {
//     sum += elem; // sum = sum + elem
// })
//
// console.log('sum: ', sum) // 15

// find() - метод массива возвращает первый элемент согласно переданному условию, если эл-та нет - undefined

// const words = ['abs', 'testvariable', 'peopl', 'apple', 'test'];
// const res = words.find(function (el){
//     return el.length === 5;
// });
//
// console.log(res); //peopl

// const words = ['abs', 'testvariable', 'test'];
// const res = words.find(function (el){
//     return el.length === 5;
// });
//
// console.log(res); //undefined

// includes() - проверяет наличие элемента в массиве

// const arr = [1, 2, 3, 4, 5, 6];
// const res = arr.includes(3);
// const noValue = arr.includes(10);
//
// console.log('res: ', res);  //true
// console.log('noValue: ', noValue); //false

//filter() - возвращает новый массив элементов, согласно переданному условию в коллбеке.
// иммутабельный метод при вызове создает новый массив элементов

// const words = ['abs', 'testvariable', 'test', 'purple', 'plants', 'beer', 'Poland'];
//
// const res = words.filter((el) => el.length >= 6);
//
// console.log('res: ', res); // [ 'testvariable', 'purple', 'plants', 'Poland' ]

// sort() - метод для сортивки, сортирует на месте (мутабельный)

// const names = ['Donald', 'alex', 'Alex'];
// console.log(names.sort()); // [ 'Alex', 'Donald', 'alex' ]

//const numbers = [1, 90, 2, 4, -1000, 56, 87];

// const compareFunction = (a, b) => {
//     if (a > b) {
//         return 12; // переставляем наши элементы
//     } else {
//         return -12; // не переставляем
//     }
// };

// console.log(numbers.sort(compareFunction)); // [-1000, 1, 2, 4, 56, 87, 90]

// const res = numbers.sort((a,b) => a - b);
// console.log('res: ', res); // по возрастанию [-1000, 1, 2, 4, 56, 87, 90]

// const res = numbers.sort((a,b) => b - a);
// console.log('res: ', res); // по убыванию [90, 87, 56, 4, 2, 1, -1000]

