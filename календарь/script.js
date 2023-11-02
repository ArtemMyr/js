let data = new Date();

let obj = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
};



let month = data.getMonth();
let year = data.getFullYear();

let maxDays = 0;


function getMaxDaysInMonth(month, year) {


    let lastDay = new Date(year, month, 0);
    console.log('year: ', year);
    console.log('month: ', month);
    console.log('lastDay : ', lastDay );

    return lastDay.getDate();
}


let body = document.querySelector('body');


let renderyear = (()=>{
    let div = document.createElement('div');
    div.classList.add('year');

    let p = document.createElement('p');
    p.textContent = data.getFullYear();

    div.appendChild(p);
    body.appendChild(div);
})();

let rendermonth = (()=>{
    let divMonth = document.createElement('div');
    divMonth.classList.add('month');
    for (let i = 0; i < 12; i++) {
            let div = document.createElement('div');
            div.classList.add('block');

            let p = document.createElement('p');
            p.textContent = obj[i];

            div.onclick = () => {
                for (let i in obj) {
                    if (div.textContent === obj[i]) { 
                        document.querySelectorAll('.day').forEach(day => {
                            day.remove();
                        });
                        firstDayOfWeek = getFirstDayOfWeekInMonth(i, 2023);
                        maxDays = getMaxDaysInMonth(i, 2023);
                        
                        
                        renderday();
                    }
                }
            }

            div.appendChild(p);
            divMonth.appendChild(div);
        }
        body.appendChild(divMonth);
})();

function getFirstDayOfWeekInMonth(month, year) {
    let firstDay = new Date(month, year, 0);
    let dayOfWeek = firstDay.getDay();
    console.log('dayOfWeek: ', dayOfWeek);

    return dayOfWeek;
};
//День недели с которого начинается месяц
let firstDayOfWeek;
console.log('firstDayOfWeek: ', firstDayOfWeek);

let nede = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let renderned = function(){
    let ul = document.createElement('ul');
    for (let i = 0; i < 7; i++) {
        let li = document.createElement('li');
        li.textContent = nede[i];

        ul.appendChild(li);
    }
    body.appendChild(ul);
};
renderned();

let liRender = document.querySelectorAll('li');
//Рендерим дни
let renderday = function(){
    let daysBefore = (firstDayOfWeek + 7) % 7; 
    console.log('firstDayOfWeek: ', firstDayOfWeek);
    console.log('daysBefore: ', daysBefore);
    
    for (let i = daysBefore; i > 0; i--) {
        let div = document.createElement('div');
        div.classList.add('day');
        div.textContent = "-";
        
        let index = (firstDayOfWeek - i + 7) % 7;
        liRender[index].appendChild(div);
    }

    for (let i = 1; i <= maxDays; i++) {
        console.log('maxDays: ', maxDays);
        let div = document.createElement('div');
        div.classList.add('day');
        div.textContent = i;
        
        let index = (firstDayOfWeek + i - 1) % 7;
        liRender[index].appendChild(div);
    }
};






// function getMaxDaysInMonth(month, year) {
//         if (year === 'undefined') {
//             year = new Date().getFullYear();
//         }
    
//         let lastDay = new Date(year, month , 0);
    
//         // return lastDay.getDate();
//         console.log('lastDay.getDate(): ', lastDay.getDate());
//     }

//     getMaxDaysInMonth(2,2023);