let input = document.querySelector('input');

input.onblur = () => {
    a = input.value;
    arr = a.split('');
    arr_reverse = a.split('').reverse();
    
