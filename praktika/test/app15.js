// let p = document.querySelectorAll('p');


// for(let i of p){
//     let span = document.createElement('span');
//     span.textContent = i.textContent;
//     i.textContent = '';
//     i.appendChild(span)
    
//     let a = document.createElement('a');
//     a.textContent = 'link';
//     a.href = '';
//     i.appendChild(a);

//     a.onclick = ()=> {
//         event.preventDefault();
//         a.remove();
//         span.style.textDecoration = 'line-through'
//     }
// }


let elems = document.querySelectorAll('#parent tr');
let bool = true;

for(let elem of elems){
    let remove = document.createElement('td');
    
    remove.textContent = 'remove';
    elem.appendChild(remove);

    remove.onclick = ()=> {
        if (bool) {
            elem.style.background = 'green';
            bool = false;
        }else{
            elem.style.background = 'red';
            bool = true;
        }
    }
}