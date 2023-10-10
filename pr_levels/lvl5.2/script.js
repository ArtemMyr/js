let sum = 0;
let i = 0;
while (i != 100) {
    i++;
    sum += i;
}

document.querySelector('p').textContent = sum;