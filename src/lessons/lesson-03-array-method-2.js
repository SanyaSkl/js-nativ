//slice() - иммутабельный метод массива

//массив.slice (откуда отрезать, [докуда отрезать])

//1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, 3); // 2-й не включительно вырезает
//
// console.log('arr: ', arr);
// console.log('sub: ', sub);

//2)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(2);
//
// console.log('sub: ', sub); [ 'c', 'd', 'e' ]

//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1);
//
// console.log('sub: ', sub);  [ b', 'c', 'd' ]

///splice() - splice - мутабельный
//массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...)

//1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1,3);
//
// console.log('arr: ', arr); // arr:  [ 'a', 'e' ]
// console.log('res: ', res); // res:  [ 'b', 'c', 'd' ]

//2)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 0, 'test1', 'test2', 'test3');
//
// console.log('arr: ', arr);  // arr:  ['a', 'test1', 'test2', 'test3', 'b', 'c', 'd', 'e']
// console.log('res: ', res); // []

//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 2, 'test1', 'test2');
//
// console.log('arr: ', arr);  // arr:  [ 'a', 'test1', 'test2', 'd', 'e' ]
// console.log('res: ', res); // [ 'b', 'c' ]

// toSpliced() = иммутабельный

//  const months = ['Jan', 'Mar', 'Apr', 'May'];
// const res = months.toSpliced(1, 0, 'February');
//
// console.log(months)  // ['Jan', 'Mar', 'Apr', 'May']
// console.log(res)  // ['Jan', 'February', 'Mar', 'Apr', 'May']

// reduce()
// arr.reduce((acc, item, index) => {})
//1)
// sum

// let a = [1, 2, 3, 4, 5];
// let sum = 0;
//
// for(let i = 0; i < a.length; i++) {
// sum = sum + a[i];
// }
//
// console.log('sum: ', sum); //sum:  15

// let a = [1, 2, 3, 4, 5];
//
// let res = a.reduce((acc, el) => {
//     console.log('acc: ', acc); // acc: 0, acc: 1, acc:  3, acc:  6, acc:  10
//     console.log('el: ', el); // el:  1, el:  2, el:  3, el:  4, el:  5
//     return acc + el;
// }, 0)
//
// console.log('res: ', res) // res: 15

//2)

// const fruits = [
//     { name: 'apple', quantity: 2},
//     { name: 'banana', quantity: 3},
//     { name: 'orange', quantity: 1},
// ];
//
// const res = fruits.reduce((acc, el) => {
//     console.log('acc: ', acc)
//     console.log('el: ', el)
//     return acc + el.quantity;
// }, 0)
//
// console.log('res: ', res);

//3)

// let a = [1, 2, 3, 4, 5];
// let res = a.reduce((acc, current) => {
//     console.log('acc: ', acc)
//     console.log('current: ', current)
//     return current > acc ? current : acc
// })
//
// console.log('res: ', res)

//4)

// const people = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 22},
// ];
//
// const res = people.reduce((acc, person) => {
//     console.log('person: ', person);
//
//     acc.totalNames.push(person.name);
//     acc.totalAges += person.age;
//
//     return acc;
// },
//     { totalNames: [], totalAges: 0}
// );
//
// console.log('res: ', res); // { totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

//5)

// const people = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 22},
// ];
//
// const mappedInfo = people.map((person) => ({
//     name: person.name,
//     age: person.age
// }));
//
// console.log('mappedInfo: ', mappedInfo);
//
// const combinedInfoMap = {
//     totalNames: mappedInfo.map((person) => person.name),
//     totalAges: mappedInfo.reduce((acc, el) => acc + el.age, 0),
// };
//
// console.log('combinedInfoMap: ', combinedInfoMap);

const peoples = [
    {names: 'Vika', age: 25, budget: 4500},
    {names: 'Nikita', age: 45, budget: 35000},
    {names: 'Igor', age: 55, budget: 340},
    {names: 'Insaf', age: 65, budget: 50000},
    {names: 'Alyona', age: 75, budget: 20},
];

// let res = peoples.reduce((acc, el) => {
//     console.log()
//     return acc + el.budget
// }, 0)

//console.log('res: ', res);

const res = peoples.reduce((acc, person) => {

    acc.totalNames.push(person.names),
        acc.totalAges += person.age

    return acc

}, {totalAges: 0, totalNames: []} )

console.log('res; ', res)