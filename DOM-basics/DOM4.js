let input = document.querySelectorAll('input');

input[0].onblur = () => {
    for(let i = 0; i <= input.length - 1; i++){
        a = input[0].value;
        arr = a.toString().split(' ');
        input[i + 1].value = arr[i];  
    }
}