let input = document.querySelector('input');
let button = document.querySelector('button');

button.onclick = () => {
    input.value = (input.value-32)*5/9;
}