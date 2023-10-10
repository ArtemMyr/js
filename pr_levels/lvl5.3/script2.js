document.querySelector('button').addEventListener('click', () => {
    let sum = 0;
    document.querySelector('input').value.split('').forEach(elem => {
        sum += +elem;
    });
    document.querySelector('p').textContent = sum;
})