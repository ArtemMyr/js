let input = document.querySelector('input');
let button = document.querySelector('button');

button.onclick = () => {
    let sum = 1;
    for (let i = input.value; i > 0; i--) {
        sum *= i;
    }
    input.value = sum;
}