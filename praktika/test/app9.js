let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.onclick = ()=>{
    elem.remove();
    event.preventDefault();
}