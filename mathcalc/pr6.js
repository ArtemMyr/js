let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

button[0].onclick = () => {
    let num = +input[0].value;
    let num1 = +input[1].value;
    let a = Math.min(+input[0].value, +input[1].value);
    for(let i = 2; i <= Infinity; i++){
        p[0].innerHTML = i;
        if(i % num === 0 && i % num1 === 0){
            p[0].innerHTML = i;
            break;
        }
    }
}