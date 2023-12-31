// let obj = {
//     name: 'weakmap'
// }

// const arr =[obj]

// obj = null;

// console.log(arr[0]);

// const map = new WeakMap([
//     [obj, 'weakmap']
// ]);
// get set delete has

// obj = null;

//==ПРАКТИКА==\\


const cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user); 
}

let lena = {name: 'Lena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));