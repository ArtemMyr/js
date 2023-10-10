let input = document.querySelector('input');
let arr = ['Воскресенье', 'Понедельник', 'Вторник', ' Среда', 'Четверг', 'Пятница', 'Суббота'];

input.onblur = () => {  
    let a = input.value.split(".");
    let date = new Date(a[2],a[1]-1,a[0]);
    console.log(arr[date.getDay()])
}