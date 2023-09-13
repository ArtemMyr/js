let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

button[0].onclick = () => {
    let a = Math.min(+input[0].value, +input[1].value);
    let arr = [];

    for(let i = 0; i <= a; i++){
        if(+input[0].value % i === 0 && +input[1].value % i === 0){
            arr.push(i);
        }
    }
    p[0].innerHTML = 'Общие делители: ' + arr;
} 