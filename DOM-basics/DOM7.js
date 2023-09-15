let input = document.querySelector('input');

input.onblur = () => {
    value = input.value; 
    a = value.split('.').reverse(); 
    b = a.join('-');
    input.value = b;
}