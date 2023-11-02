//Убирает повторяющиеся элементы
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set.add(10)

//has проверяет наличие элемента 

// console.log(set.has(101));

// console.log(set.delete(1));
// console.log(set.size);
// console.log(set.clear());
// console.log(set.size);

// console.log(set.values());
// console.log(set.keys());

// for (let i of set){
//     console.log(i);
// }


//====ПРИМЕР====//

function uniqValues(array) {
    return [...new Set(array)];
}

console.log(uniqValues([1, 2, 3, 3, 3, 4, 5]));