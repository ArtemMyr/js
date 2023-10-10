document.querySelector('button').addEventListener('click', () =>{
    let sum = 0
    document.querySelectorAll('input').forEach((elem) => {
        sum += +elem.value;
        document.querySelector('p').textContent = sum;
    });
});