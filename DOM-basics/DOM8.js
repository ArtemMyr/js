let input = document.querySelector('input');

input.onblur = () => {
    a = input.value;
    arr = a.split('');
    arr_reverse = a.split('').reverse();
    
    input.value = JSON.stringify(arr) !== JSON.stringify(arr_reverse)? 'Неа': 'Да';
}