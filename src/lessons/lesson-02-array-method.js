// push(), pop(), shift(), unshift() - мутирующие (изменяют исходный массив)

//push() - добавляет 1 или более элементов в конец массива

const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
const result = names.push('Mark', 'Anna', 'Olga');

console.log("names:", names);  // names: ['Alex', 'Bob', 'Ivan', 'Sasha', 'Mark', 'Anna', 'Olga']
console.log("result:", result) // result: 7
