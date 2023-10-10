let p = document.querySelectorAll('p');
let btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    for (let i = 0; i < p.length; i++) {
        p[i].textContent = i+1;
    };
});