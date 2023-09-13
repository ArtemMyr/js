let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');


button[0].onclick = () => {
    let a = +input[0].value;
    let arr = [];
    for(let i = 0; i <= a; i++){
        if(a % i == 0){
            arr.push(i);
            p[0].innerHTML = arr + '<br>Всего делителей: ' + arr.length;
        }
    }
}
