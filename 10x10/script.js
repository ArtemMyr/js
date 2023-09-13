let target = document.querySelectorAll('td');
let arr = [];
let counter = 0;

let rand = function(){
    return Math.floor(Math.random() * 100)
}

for(i = 0; i <= 20; i++){
    let random = rand();
    arr.push(random);
}

target.forEach(function(item, index) {
    item.addEventListener('click', function() {
        if(arr.includes(index)){
            target[index].classList.add('win');
        }else{
            target[index].classList.add('lose');
            counter += 1;
            if(counter == 10){
                document.querySelector('p').innerHTML = 'Ты проиграл!';
                document.querySelector('table').classList.add('user-none');
            }
        }
    });
  });
