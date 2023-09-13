let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');

btn.addEventListener('click', function(){
    let num1 = +elem1.value;
    otvet.innerHTML = `Ответ:  ${num1 * num1}`;
})

btn1.addEventListener('click', function(){
    let num1 = +elem3.value;

    otvet1.innerHTML = `Ответ:  ${num1 * 4}`;
})

