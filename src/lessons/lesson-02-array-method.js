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

