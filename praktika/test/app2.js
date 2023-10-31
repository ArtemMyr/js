


document.querySelector('button').onclick = ()=>{
       
    let table = document.querySelector('#table');
    let input = document.querySelectorAll('input');
    for (let i = 0; i < input[0].value; i++) {1
        let tr = document.createElement('tr');
        
        for (let i = 0; i < input[1].value; i++) {
            let td = document.createElement('td');
            td.textContent = 'x';
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
}

