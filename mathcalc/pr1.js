let button = document.querySelectorAll('.pr1 button');
let input = document.querySelectorAll('.pr1 input');
let p = document.querySelectorAll('.pr1 p');

button[0].onclick = () => {
    a = +(input[0].value);
    b = +(input[1].value);
    c = +(input[2].value);

    d = (b**2) - ((4*a)*c);
    if(d >= 0 && a != 0){
        x1 = (-b + Math.sqrt(d))/(2*a);
        x2 = (-b - Math.sqrt(d))/(2*a);
        p[0].innerHTML = "x1 = " + x1;
        p[1].innerHTML = "x2 = " + x2; 
    }else{
        
        p[0].innerHTML = "Корней нету";
    }
    
}
