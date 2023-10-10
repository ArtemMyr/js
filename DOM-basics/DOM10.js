let p = document.querySelectorAll('p');
let button = document.querySelector('button');

button.onclick = () => {
    p.forEach(function(p,index){
        p.textContent += index + i;
    })
}