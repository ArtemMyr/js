

document.querySelector('button').addEventListener('click', () => {
    let a = document.querySelector('input').value;
    let sum = 1;
    for (let i = 1; i <= a; i++) {
        sum *= i;
    }
    document.querySelector('p').textContent = sum;
})

