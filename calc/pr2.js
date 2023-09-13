let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');

btn.addEventListener('click', function(){
    let num1 = +elem.value;
    let num2 = +elem1.value;
    otvet.innerHTML = `Ответ:  ${num1 * num2}`;
})

btn1.addEventListener('click', function(){
    let num1 = +elem2.value;
    let num2 = +elem3.value;
    otvet1.innerHTML = `Ответ:  ${(num1 + num2) * 2}`;
})