let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');



input[0].onblur = () => {
    sum = 0;
    sum1 = 0;
    a = input[0].value;
    arr = a.toString().split(',');
    for(i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }

    p[0].textContent = sum / arr.length;
    
}

