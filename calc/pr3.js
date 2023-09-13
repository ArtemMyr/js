let btn = document.querySelector('#btn')

const p = 3.14;

btn.addEventListener('click', function(){
    num = +r.value;
    otvet.innerHTML = `Ответ:  ${p *(num**2)}`;
})

let btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', function(){
    num1 = +r1.value;
    otvet1.innerHTML = `Ответ:  ${(2*p)*num1}`;
})