let input = document.querySelectorAll('input');
let button = document.querySelectorAll('button');
let p = document.querySelectorAll('p');

button[0].onclick = () => {
    p[0].textContent = +input[0].value + +input[1].value + +input[2].value;
}