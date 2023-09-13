//215

//Сделайте функцию func, которая будет возвращать через return какую-либо строку.
// function func(){
//     return 'hello'
// }
// console.log(func())



//Выведите результат работы функции func в консоль.
// function func(a,b){
//     return a+b
// }
// console.log(func(2,3))

//Выведите исходный код func в консоль.
// function func(){
//     return '!'
// }
// console.log(func)


//Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
// function func(){
//     console.log('!');
// }
// func();

// func = 123;
// console.log(func);

//Сделайте функцию func1, которая будет возвращать через return число 3.

// function func1() {
// 	return 3;
// }

// console.log(func1());

//Скопируйте исходный код функции func1, в переменную func2.

// function func1(){
//     return 3;
// }

// let func2 = func1();

// console.log(func2)

//Выведите в консоль сумму результатов работы функций func1 и func2.
// function func1(){
//     return 3;
// }

// let func2 = func1();
// console.log(func2+func1())

//Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

// let func1 = function(){
//     return 1;
// }

// console.log(func1());

//Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

// let func2 = function(){
//     return 2;
// }

// console.log(func2()+func1());


//


// function test(num, func) {
// 	console.log(func(num));
// }

// test(3, function(num){
//     return num * num;
// })

// test(3, function(num){
//     return num * num * num;
// })


// function test(arr, func){
//     for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}

// 	return arr;
// }

// let result = test([1,2,3,4],function(num){
//     return num * num
// })

// console.log(result)

// function test(arr, func){
//     for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}

// 	return arr;
// }

// let result = test([1,2,3,4],function(num){
//     return num * num * num
// })

// console.log(result)

//-----Вложенные функции-----\\
// function func(num1, num2){
//     function square(num){
//         return num * num * num;
//     }
//     function cube(num){
//         return num * num;
//     }
//     return square(num1) + cube(num2);
// }

// console.log(func(2, 3))

//---------------------------\\

