let div = document.querySelectorAll('div');


for (let i = 0; i < div.length; i++) {
    let divlength = div[i].textContent.split(' ').length;
    if (divlength > 10) {
        div[i].textContent = div[i].textContent.split(' ').slice(0,11).join(' ') + '...';
    }
}
