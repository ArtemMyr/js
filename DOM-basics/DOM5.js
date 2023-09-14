let input = document.querySelector('input');


input.onblur = () => {
    a = input.value;
    //charAt(0) Возвращает первый символ строки. //substring возвращает подстроку начиная с первого элемента
    arr = a.split(' ').map(a => a.charAt(0).toUpperCase() + a.substring(1));

    input.value = arr.join(' ');

}