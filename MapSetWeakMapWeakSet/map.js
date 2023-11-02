const obj = {
    name: 'John',
    age: 26,
    job: 'programmer'
}

const entries = [
    ['name', 'John'],
    ['age', 26],
    ['job', 'programmer']
]

//Object.entries(...) метод который позволяет привести объект к записи массиву// То есть, делает из объекта массив

// console.log(Object.entries(obj));

//Object.fromEntries(...) делает из массива объект

// console.log(Object.fromEntries(entries));


//new Map(...) конструктор// Можно передавать массив или переменную со значениями
const map = new Map(entries);

//map.get() для получения ключа


//map.set('...','...') передаём два пораметра
// map.set('newField', '42').set(obj, 'Value of object');


// map.delete('job');


//map.size для получения количества элементов в мапе
// console.log(map.size);


//map.clear() для удаления всех элементов
// map.clear();
// console.log(map);

//======

// entries по сути возврыщает массив// его вызывать не обязательно

// for(let [key, value] of map){
//     console.log(key, value);
// }

// for(let val of map.values()){
//     console.log(val);
// }
// for(let key of map.keys()){
//     console.log(key);
// }

// map.forEach((val,kay,m) =>{
//     console.log(val);
// })

//======

// const array = Array.from(map);

// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);


//======ПРИМЕР======\\

// const users = [
//     {name: 'Elena'},
//     {name: 'Ivan'},
//     {name: 'Peter'}
// ]

// const visits = new Map();

// visits.set(users[0], new Date())
// .set(users[1],new Date(new Date().getTime()+1000 * 60))
// .set(users[2], new Date(new Date().getTime()+5000 * 60));

// function lastVisit(user) {
//     return visits.get(user);

// }

// console.log(lastVisit(users[1]));