let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');

button[0].onclick = () => {
    num = parseInt(input[0].value);
    num1 = parseInt(input[1].value);
    num2 = parseInt(input[2].value);

    p = (num + num1 + num2)/2;
    s = (Math.sqrt(p*(p-num)*(p-num1)*(p-num2)))

    otvet.innerHTML = "Ответ: " + s;
}