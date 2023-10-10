let table = document.querySelector('#table');

let tr = document.createElement('tr');

for (let i = 1; i <= 3; i++) {
	let td = document.createElement('td');
	tr.appendChild(td);
}

table.onclick = () => {
	let tr = document.createElement('tr');
	table.appendChild(tr);
}


table.appendChild(tr);