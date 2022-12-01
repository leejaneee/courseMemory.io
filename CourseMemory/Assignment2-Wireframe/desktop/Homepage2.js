let ull = document.querySelector('.worksection');
let ulll = document.querySelector('.workspaceback');
let liss = document.querySelectorAll('.temps2');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

ull.innerHTML = ull.innerHTML + ull.innerHTML;

let spaa = 0;

ull.style.width = liss[0].offsetwidth * liss.length + 'px';

function move1() {
    if (ul.offsetLeft < -ul.offsetWidth / 2) {
        ul.style.left = '0';
    }

    if (ull.offsetLeft > 0 || ull.offsetLeft + offsetwidth < 0)
        ull.style.left = 0;

    ull.style.left = ull.offsetLeft + 'px';


}

let timerr = setInterval(move1, 30);

left.addEventListener('click', function() {
    ull.style.left = ull.offsetLeft - 50 + 'px';


})

right.addEventListener('click', function() {
    ull.style.left = ull.offsetLeft + 50 + 'px';


})