let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let p = document.querySelectorAll('p');

button[0].onclick = () => {
    a = +(input[0].value);
    b = +(input[1].value);
    c = +(input[2].value);

    d = (b**2) - ((4*a)*c);
    if(d >= 0 && a != 0){
        x1 = (-b + Math.sqrt(d))/(2*a);
        x2 = (-b - Math.sqrt(d))/(2*a);
        p[0].textContent = "x1 = " + x1;
        p[1].textContent = "x2 = " + x2; 
    }else{
        p[1].textContent = '';
        p[0].textContent = "Корней нету";
    }
    
}