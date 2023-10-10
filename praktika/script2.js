let table = document.querySelector('#table');
let input = document.querySelectorAll('input');
let btn = document.querySelector('button');
let column,row;

btn.onclick = () => {
    let column = input[0].value;
    let row = input[1].value;


for (let i = 0; i < column; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < row; i++) {
		let td = document.createElement('td');
        let tdadd = document.querySelector('td');
        tdadd = 'x'; td.textContent = tdadd; 
		tr.appendChild(td);
        

	}
	

	table.appendChild(tr);
}
}