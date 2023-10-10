let arr = [1, 2, 3, 4, 5];

let ul = document.querySelector('#elem');


for (let i of arr) {
    let li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);

    li.onclick = () => {
        let p = document.querySelector('p');
        p.textContent = li.textContent + '!';
    }
}