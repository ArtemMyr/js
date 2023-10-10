let a = document.querySelector('a');

if (a.href.includes('http://')) {
    a.textContent += ' ' + '→';
}