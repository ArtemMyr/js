let input = document.querySelector('input');

input.onblur = () => {
    let value = input.value; 
    let a = value.split('.').reverse(); 
    let b = a.join('-');
    input.value = b;
}