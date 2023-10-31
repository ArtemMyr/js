let elems = document.querySelectorAll('#parent tr');


for(let elem of elems){
    let remove = document.createElement('p');

    remove.textContent = 'remove';
    elem.appendChild(remove);

    remove.onclick = ()=> {
        elem.remove();
    }
}