let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

button[0].onclick = () => {
    arr = [];
    arr.push( +input[0].value, +input[1].value, +input[2].value);
    arr.sort((a, b) => a - b);
    if((arr[2] **2) === (arr[0] **2) + (arr[1] **2)){
        p[0].innerHTML = "Да";
    }else{
        p[0].innerHTML = "Нет";
    }
}

