let input = document.querySelector('input');

input.onblur = () => {
    a = input.value;
    arr = a.split(' ');
    input.value = arr.length;
}