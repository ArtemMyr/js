let input = document.querySelector('input');
let button = document.querySelector('button');

let rand = () => {
    return Math.floor(Math.random() * 100)
}

button.onclick = () => {
    input.value = ' ';
    for (let i = 0; i < 9; i++) {
        input.value += String.fromCharCode(rand());
    }
}