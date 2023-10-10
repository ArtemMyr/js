document.querySelector('button').addEventListener('click', ()=>{
    let arr = [];
    document.querySelectorAll('input').forEach(elem => {
        arr.push(elem.value);
    });
    console.log(Math.max(...arr))
})