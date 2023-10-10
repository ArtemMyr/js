let input = document.querySelector('input');

input.onblur = () => {
    a = input.value;
    arr = a.split('');
    for (let i = 0; i < arr.length; i++) {
        input.value = arr[i] == 3 ? 'Есть число': 'Числа нету';
    }
}