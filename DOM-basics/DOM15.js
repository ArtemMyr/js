let p = document.querySelectorAll('p');
let input = document.querySelector('input');

for (let i = 0; i < p.length; i++) {
    p[i].onclick = () => {
        if (+input.value + +p[i].innerHTML != -1) {
            input.value = +input.value + +p[i].innerHTML;
        }else{
            
        }
    }
}