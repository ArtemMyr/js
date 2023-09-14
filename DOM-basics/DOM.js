let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');


input[0].onblur = () => {
    p[0].textContent += input[0].value;
}