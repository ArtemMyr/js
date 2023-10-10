// document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('p').textContent = document.querySelector('input').value.split('').reverse().join('');
// })

//for
document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('input').value;
    let arr = [];
    for (let i = input.length -1 ; i >= 0; i--) {
        arr.push(input[i])
    }
    console.log(arr)
})