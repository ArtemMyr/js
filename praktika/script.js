let arr = [1, 2, 3, 4, 5];
let parent = document.querySelector('#parent');

for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
    p.onclick = () => {
        p.textContent = +p.textContent + 1;
    }
	
	parent.appendChild(p);
}
